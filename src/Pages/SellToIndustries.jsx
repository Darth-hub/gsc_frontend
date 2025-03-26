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
  Badge,
  Modal, // 🆕 Import Mantine Modal
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks'; // 🆕 Import Mantine hook
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useRef, useState, useContext } from 'react';
import './SellToIndustries.css';
import { IconBlur } from '@tabler/icons-react';
import { color } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { DataContext } from '../Context/DataContext';
import { Link } from 'react-router-dom';
import { notifications } from '@mantine/notifications';


export function SellToIndustries() {

  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('IN'); // Default country
  const { id } = useParams();
  const { Industrydata } = useContext(DataContext);
  const divRef1 = useRef(null);
  const divRef2 = useRef(null);
  const divRef3 = useRef(null);
  const divRef4 = useRef(null);
  const image = Industrydata[id - 1].industry_image;

  // 🆕 Mantine Modal Hook
  const [opened, { open, close }] = useDisclosure(false);

  console.log(Industrydata[id - 1]);

  const toggleClass1 = () => {
    divRef1.current.classList.toggle('opacity-50');
  };
  const toggleClass2 = () => {
    divRef2.current.classList.toggle('opacity-50');
  };
  const toggleClass3 = () => {
    divRef3.current.classList.toggle('opacity-50');
  };
  const toggleClass4 = () => {
    divRef4.current.classList.toggle('opacity-50');
  };

  function done() {
    notifications.show({
      color: 'green', // Use a valid color value
      title: 'Request sent!',
      message: 'You will receive a call from the industry dealer',
    });
    open(); // 🆕 Open the success modal
    setTimeout(() => {
      navigate(-1);
    }, 1500);
  
  }

  return (
    <>
      {/* 🆕 Mantine Modal */}
      <Modal opened={opened} onClose={close} centered size="md">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold text-green-700 mt-4">Great!</h2>
          <p className="text-gray-600 text-center mt-2">
            Your request has been successfully sent!
          </p>
          <Button
            color="green"
            fullWidth
            radius="xl"
            mt="md"
            onClick={close}
          >
            Close
          </Button>
        </div>
      </Modal>

      <div className="SellToIndustieswrapper flex justify-center p-5 items-center gap-6 h-screen w-screen">
        <form
          className="SellToIndustiesform h-[90vh] bg-green-700 rounded-md"
          style={{ padding: '3vw', color: 'white', width: 500 }}
        >
          <Title className="w-[20vw]" w={400} mb={25} align="center">
            Send A Request
          </Title>

          <TextInput
            w={400}
            mb={20}
            required
            label="Weight (in kg)"
            placeholder="eg 3.5"
            size="sm"
          />

          <div className="mb-2 font-bold text-sm">What type of waste do you have?</div>
          <div className="flex">
            <div className="mr-5">
              <div ref={divRef1} className="mb-5">
                <Badge
                  h={40}
                  w={175}
                  onClick={toggleClass1}
                  className="selectTypeOfWaste"
                  variant="light"
                  color="white"
                >
                  E Waste
                </Badge>
              </div>
              <div ref={divRef2}>
                <Badge
                  h={40}
                  w={175}
                  onClick={toggleClass2}
                  className="selectTypeOfWaste"
                  variant="light"
                  color="white"
                >
                  Paper Waste
                </Badge>
              </div>
            </div>

            <div>
              <div ref={divRef3} className="mb-5">
                <Badge
                  h={40}
                  w={175}
                  onClick={toggleClass3}
                  className="selectTypeOfWaste"
                  variant="light"
                  color="white"
                >
                  Metal Waste
                </Badge>
              </div>
              <div ref={divRef4}>
                <Badge
                  h={40}
                  w={175}
                  onClick={toggleClass4}
                  className="selectTypeOfWaste"
                  variant="light"
                  color="white"
                >
                  others...
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
            <b>Note:</b>
            <i>
              {' '}
              Industrial Scrap Prices are Standardized by the government of India. To see details, click{' '}
              <Link to="/scrap_rate" style={{ color: 'black' }}>
                here
              </Link>
            </i>
          </div>

          <div>How can we contact you?</div>
          <PhoneInput
            labels="How can we contact you?"
            className="phoneNumberInput"
            style={{ backgroundColor: 'white', color: 'black', width: 400 }}
            international
            defaultCountry={country}
            value={phone}
            onChange={setPhone}
            placeholder="Enter phone number"
          />

          <Checkbox
            w={400}
            label="I assure that all the information given is correct"
            mt="xl"
            size="md"
          />
          <Button onClick={done} fullWidth w={400} bg="bg-zinc-900" mt={50} size="md">
            submit
          </Button>
        </form>

        <div className="text-white">
          <img src={image} className="h-[70vh] rounded-md" alt="Industry" />
          <p className="text-[2vw] mt-5">{Industrydata[id - 1].industry_name}</p>
          <p className="mb-5 w-100">{Industrydata[id - 1].industry_location}</p>
          <p>{Industrydata[id - 1].industry_description}</p>
        </div>
      </div>
    </>
  );
}

export default SellToIndustries;
