import {
    Anchor,
    Button,
    Checkbox,
    Divider,
    Group,
    Paper,
    PasswordInput,
    Stack,
    Text,
    TextInput,
    Chip,
    Loader,
  } from '@mantine/core'
  import { useForm } from '@mantine/form'
  import { upperFirst, useToggle } from '@mantine/hooks'
  import GoogleButton from './GoogleButton'
  import { notifications } from '@mantine/notifications'
  import TwitterButton from './TwitterButton'
  import axios from 'axios'
  import { app } from '../src/firebase/firebase.config.js'
  import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
  import { useEffect, useState } from 'react'
  import { useNavigate } from 'react-router-dom'
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

const url = import.meta.env.VITE_BACKEND_URL;

export default function AuthenticationForm() {
    const navigate = useNavigate()
    const [type, toggle] = useToggle(['login', 'register']);    
    const [role, setRole] = useState('Seller')
    const [pressed, setPressed] = useState(false)
    const form = useForm({
      initialValues: {
        email: '',
        name: '',
        password: '',
        terms: true,
      },
  
      validate: {
        email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
        password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
      },
    }); 
  
    const signupUser = async() => {
      const api = `${url}/registeruser`
      try{
        setPressed(true)
        const res = await axios.post(api,{
          name: form.values.name,
          email: form.values.email,
          password: form.values.password,
          role,
        })
        notifications.show({
          color: 'green',
          title: 'Registration Successfull!',
          message: 'Please Login to continue'
        })
        setPressed(false)
      }catch(error){
        setPressed(false)
        console.log(error);
        notifications.show({
          color: 'red',
          title: 'Registration failed!',
          message: error.message,
        })
      }
    }

    const loginUser = async () => {
      try {
        setPressed(true)
        const userCredential = await signInWithEmailAndPassword(auth, form.values.email, form.values.password); 
        notifications.show({
          color: 'green',
          title: 'Welcome Back',
          message: 'Your session is live now'
        })
        setPressed(false)
        // navigate('/')
        // redirect
      } catch (error) {
        setPressed(false)
        console.log(error)
        notifications.show({
          color: 'red',
          title: 'Login failed!',
          message: "Invalid email or password",
        })
      }
    };

    const googleUser = async() => {
      try{
        setPressed(true)
        const result = await signInWithPopup(auth, provider)

        if(type === 'login'){
          notifications.show({
            color: 'green',
            title: 'LogedIn Successfully',
            message: 'Your session is live now'
          })          
        }else{
          notifications.show({
            color: 'green',
            title: 'Registered Successfully',
            message: 'Your session is live now'
          })
        }
        setPressed(false)
      }catch(error){
        setPressed(false)
        console.error(error)

        if(type === 'login'){
          notifications.show({
            color: 'red',
            title: 'Login failed!',
            message: error.message,
          })          
        }else{
          notifications.show({
            color: 'red',
            title: 'SignUp failed!',
            message: error.message,
          })
        }
      }
    }

    

    return (
      <Paper bg='#388E3C' radius="md" p="xl" w={500}>
        <Text size="lg" color='black' fw={500}>
          Welcome to Eclyra, {type} with
        </Text>
          <Group grow mb="md" mt="md">
         <GoogleButton onClick={googleUser} radius="xl">Google</GoogleButton>
           <TwitterButton radius="xl">Twitter</TwitterButton>
      </Group>
  

        <Divider style={{color : 'black'}} styles={{ label: { color: "black" }}} label="Or continue with email" labelPosition="center" my="lg" />
  
        <form onSubmit={form.onSubmit(() => {type === 'login' ? loginUser() : signupUser()})}>
          <Stack>
            {type === 'register' && (
              <TextInput
                label="Name"
                placeholder="Your name"
                value={form.values.name}
                onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
                radius="md"
                styles={{ label: { color: "black" }}}
              />
            )}
  
            <TextInput
              required
              label="Email"
              placeholder="Eclyra@gmail.com"
              value={form.values.email}
              onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
              error={form.errors.email && 'Invalid email'}
              radius="md"
              styles={{ label: { color: "black" } }}
            />
  
            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              value={form.values.password}
              onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
              error={form.errors.password && 'Password should include at least 6 characters'}
              radius="md"
              styles={{ label: { color: "black" } }}

            />
  
            {type === 'register' && (
              <div>
                <div className='border border-white rounded-md pt-[1vh] pl-[2vw] pb-[2vh] mb-[2vh] mt-[2vh] mb-[2vh]'>
                  <p className='text-white text-md pb-[1vh]'>What are you interested in?</p>
                  <Chip.Group>
                    <Group 
                      align="left"
                      sx={{
                        flexDirection: "column",
                        gap: "4px", // Reduce gap between chips
                      }}
                    >
                      <Chip
                        value="1"
                        radius="md"
                        checked={role === 'Seller' ? true : false}
                        onClick={(event) => setRole('Seller')}
                        defaultChecked color="#171717"
                      >
                        Selling scrap
                      </Chip>

                      <Chip
                        value="2"
                        radius="md"
                        checked={role === 'Dealer' ? true : false}
                        onClick={(event) => setRole('Dealer')}
                        defaultChecked color="#171717"
                      >
                        Buying scrap
                      </Chip>
                    </Group>
                  </Chip.Group>
                </div>

                <Checkbox
                  label="I accept terms and conditions"
                  checked={form.values.terms}
                  defaultChecked color='#171717'
                  onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
                />
              </div>
            )}
          </Stack>
  
          <Group justify="space-between" mt="xl">
            <Anchor component="button" type="button" c="black" onClick={() => toggle()} size="xs">
              {type === 'register'
                ? 'Already have an account? Login'
                : "Don't have an account? Register"}
            </Anchor>
            <div className='flex items-center'>
              {
                pressed ? <Loader color='green' mr='lg'  size={20}/> : null
              }
              <Button disabled={pressed} className='button' bg='#171717'  type="submit" radius="xl">
                {upperFirst(type)}
              </Button>
            </div>

          </Group>
        </form>
      </Paper>
    );
  }