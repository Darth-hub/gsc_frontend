import {
    Anchor,
    Button,
    Center,
    Checkbox,
    Paper,
    PasswordInput,
    Text,
    TextInput,
    Title,
    Badge
  } from '@mantine/core';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useRef, useState, useContext } from 'react';
import './SellToIndustries.css'
import { IconBlur } from '@tabler/icons-react';
import { color } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { DataContext } from '../Context/DataContext';

  export function SellToIndustries() {
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('US'); // Default country
    const {id} = useParams()
    const { Industrydata } = useContext(DataContext) 
    const divRef1 = useRef(null);
    const divRef2 = useRef(null);
    const divRef3 = useRef(null);
    const divRef4 = useRef(null);
    const image = Industrydata[id-1].industry_image

    console.log(Industrydata[id-1])

    const toggleClass1 = () => {
      divRef1.current.classList.toggle("opacity-50");
    };
    const toggleClass2 = () => {
      divRef2.current.classList.toggle("opacity-50");
    };
    const toggleClass3 = () => {
      divRef3.current.classList.toggle("opacity-50");
    };
    const toggleClass4 = () => {
      divRef4.current.classList.toggle("opacity-50");
    };

    return (
      <div className="SellToIndustieswrapper flex">
            <form className="SellToIndustiesform h-[100vh] bg-green-700 rounded-md" style={{ padding: "3vw", margin:"6vw",color:"white", width:500}} >
                <Title className="w-[20vw]"  w={400} mb={25} align="center" >
                    Send A Request
                </Title>
        
                <TextInput 
                    w={400}
                    mb={20}
                    required
                    label="Weight (in kg)" 
                    placeholder="eg 3.5" 
                    size='sm'  
                />

                <div className='mb-2 font-bold text-sm'>What type of waste do you have?</div>
                <div className='flex'> 
                  <div className='mr-5'>
                    <div ref={divRef1} className='mb-5'>
                      <Badge h={40} w={175} onClick={toggleClass1}  className='selectTypeOfWaste' variant="light" color="green" >
                        E Waste
                      </Badge>
                    </div>
                    <div ref={divRef2}>
                      <Badge h={40} w={175} onClick={toggleClass2}  className='selectTypeOfWaste' variant="light" color="green" >
                        Paper Waste
                      </Badge>
                    </div>
                  </div>

                  <div>
                    <div ref={divRef3} className='mb-5'>
                      <Badge h={40} w={175} onClick={toggleClass3}  className='selectTypeOfWaste' variant="light" color="green" >
                        Metal Waste
                      </Badge>
                    </div>
                    <div ref={divRef4}>
                      <Badge h={40} w={175} onClick={toggleClass4}  className='selectTypeOfWaste' variant="light" color="green" >
                        other...
                      </Badge>
                    </div>
                  </div>
                </div>

                <TextInput 
                    w={400}
                    required
                    label="Expected Price" 
                    placeholder="what price are you expecting?" 
                    mt="md" 
                    size="sm"

                />

                <div className="w-[30vw] text-sm mb-3">
                  <b>Note:</b><i>{" "}{" "}Industrial Scrap Prices are Standardized by goverement of India.To see details click <a href='' style={{color:'black'}}>here</a></i>
                </div>

            <div>How can we contact you?</div>
            <PhoneInput
                labels="How can we contact you?"
                className='phoneNumberInput'
                style={{ backgroundColor: 'white', color: 'black', width:400 }}
                international
                defaultCountry={country} 
                value={phone}
                onChange={setPhone}
                placeholder="Enter phone number"
            />

            <Checkbox w={400} label="I assure that all the infomation given is correct" mt="xl" size="md" />
            <Button fullWidth w={400} bg='bg-zinc-900' mt={50} size="md">
                submit
            </Button>
            </form>

            <div className='text-white '>
                <img src={image} className='h-[70vh] mt-23 rounded-md'></img>
                <p className='text-[2vw]  mt-5'>{Industrydata[id-1].industry_name}</p>
                <p className='mb-5 w-100'>{Industrydata[id-1].industry_location}</p>
                <p>{Industrydata[id-1].industry_description}</p>
            </div>
      </div>
    );
  }
  
  export default SellToIndustries