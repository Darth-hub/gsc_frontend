import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { IconFilter } from '@tabler/icons-react';
import List_User_pickups from './Components/List_User_pickups.jsx';
import Map from './Components/Map.jsx';
import { Loader, TextInput, Drawer, Button, SegmentedControl, NumberInput, Group, Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ScrapFilterForm from './Components/Filter.jsx';
import axios from 'axios';
import { useAuth } from '../Context/AuthContext.jsx';
import { notifications } from '@mantine/notifications';
import Img from "../../public/images/right-arrow.png"
import { useNavigate } from 'react-router-dom'
import { useForm } from '@mantine/form';

const url = import.meta.env.VITE_BACKEND_URL;
const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const ViewPickUp = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(true);
  const [PickUpLocation, setPickUpLocation] = useState(null);
  const [data, setData] = useState(null);
  const [time, setTime] = useState(null);
  const [distance, setDistance] = useState(null);
  const currentLocation = useRef(null);
  const [locationFetched, setLocationFetched] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const [focused, setFocused] = useState(false);
  const [currentRender, setCurrentRender] = useState('state')
  const [value, setValue] = useState('');
  const floating = value.trim().length !== 0 || focused || undefined;
  const [select, setSelect] = useState(1)

  const [state, setState] = useState(null); // Changed from useRef to useState
  const [district, setDistrict] = useState(null);
  const [PIN, setPIN] = useState(null);

  const [LivePickUps, setLivePickUps] = useState([]); // Use state for LivePickUps
  const [UpcommingPickUps, setUpcommingPickUps] = useState([]);
  const [loading, setLoading] = useState(false); // Loading state

  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 12, minutes: 57 });
  const [targetDate, setTargetDate] = useState(null)

  const navigate = useNavigate()


  useEffect(() => {    
    if (!targetDate) {
      return;
    }
    console.log(targetDate)

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        setExpired(true);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

      // setTimeLeft({ days, hours, minutes });
    }, 1000);
    console.log(timeLeft)

    return () => clearInterval(timer);
  }, [targetDate]);

  const user = useAuth();

  function findClosestUpcomingPickup() {
    const now = new Date();
    let closest = null;
    let smallestDiff = Infinity;
  
    UpcommingPickUps.forEach(pickup => {
      const datetimeStr = `${pickup.scheduledDate}T${pickup.scheduledTime}`;
      const pickupDate = new Date(datetimeStr);
      
      if (isNaN(pickupDate.getTime())) return;
  
      const diff = pickupDate - now;
      if (diff > 0 && diff < smallestDiff) {
        smallestDiff = diff;
        closest = pickupDate;
      }
    });
  
    return closest;
  }

  useEffect(() => {
    if (UpcommingPickUps.length > 0) {
      setTargetDate(findClosestUpcomingPickup())
    }
  }, [UpcommingPickUps]);

  const getAllPickUpsWithInDistrict = useCallback(async () => {
    // console.log(district)
    if (!district) return; 
    
    try {
      setLoading(true);
      const response = await axios.get(`${url}/getallpickupswithindistricts/${district}`);
      console.log(response.data.data)
      setLivePickUps(response.data.data);
    } catch (error) {
      console.error('Error fetching pickups:', error);
    } finally {
      setLoading(false);
    }
  }, [district]); 


  const getAllPickUpsWithInState = useCallback(async () => {
    if (!state) return; 
    
    try {
      setLoading(true);
      const response = await axios.get(`${url}/getallpickupswithinstate/${state}`);
      setLivePickUps(response.data.data);
    } catch (error) {
      console.error('Error fetching pickups:', error);
    } finally {
      setLoading(false);
    }
  }, [state]); // Now properly depends on state

  // Memoized function to fetch UpcommingPickUps
  const getAllAcceptedPickUps = useCallback(async () => {
    if (!user || !LivePickUps.length) return;

    try {
      setLoading(true);
      const response = await axios.get(`${url}/gellallacceptedpickups/${user.user.uid}`);
      const UpcommingPickUpIds = response.data.data.UpcommingPickUps;
      const filteredPickUps = LivePickUps.filter((pickup) =>
        UpcommingPickUpIds.includes(pickup.id)
      );
      setUpcommingPickUps(filteredPickUps);
    } catch (error) {
      console.error('Error fetching pickups:', error);
    } finally {
      setLoading(false);
    }
  }, [user, LivePickUps]);

  // Fetch LivePickUps when user is available
  useEffect(() => {
    if (state) {
      getAllPickUpsWithInState();
    }
  }, [state, getAllPickUpsWithInState]);

  // Fetch UpcommingPickUps when LivePickUps is updated
  useEffect(() => {
    if (user && LivePickUps.length > 0) {
      getAllAcceptedPickUps();
    }
  }, [user, LivePickUps, getAllAcceptedPickUps]);

  // Memoized location getter
  const locationGetter = useCallback((loc, dta) => {
    if (loc) setPickUpLocation(loc);
    if (dta) setData(dta);
    console.log(select)
    setShowSecond(select !== 1);
    setShowFirst(true);
  }, []);

  // Memoized distance getter
  const getDistance = useCallback((tim, dis) => {
    setTime(tim);
    setDistance(dis);
  }, []);

  // Memoized reset map function
  const resetMap = useCallback(() => {
    setShowFirst(false);
  }, []);

  // Memoized geolocation fetch
  const getLocationDetails = useCallback(async () => {
    if (!currentLocation.current) return;

    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${currentLocation.current.lat},${currentLocation.current.lng}&key=${GOOGLE_MAPS_API_KEY}`
      );

      if (response.data.status === 'OK') {
        const addressComponents = response.data.results[0].address_components;

        addressComponents.forEach((component) => {
          if (component.types.includes('administrative_area_level_1')) {
            setState(component.long_name); // Update state
          }
          if (component.types.includes('administrative_area_level_2')) {
            setDistrict(component.long_name);
          }
          if (component.types.includes('postal_code')) {
            setPIN(component.long_name);
          }
        });
      }
    } catch (error) {
      console.error('Error fetching location:', error);
    }
  }, []);

  // Fetch geolocation on mount
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        currentLocation.current = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setLocationFetched(true);
      },
      (error) => {
        if (error.code === error.PERMISSION_DENIED) {
          console.error('User denied location access');
        } else if (error.code === error.POSITION_UNAVAILABLE) {
          console.error('Location information is unavailable');
        } else if (error.code === error.TIMEOUT) {
          // use navigate
          console.error('Location request timed out');
        }
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  }, []);

  // Fetch location details when geolocation is fetched
  useEffect(() => {
    if (locationFetched) {
      getLocationDetails();
    }
  }, [locationFetched, getLocationDetails]);

  // Memoized function to check if current date/time is less than input
  const isCurrentDateTimeLessThanInput = useCallback((inputDate, inputTime) => {
    const inputDateTimeString = `${inputDate}T${inputTime}:00`;
    const inputDateTime = new Date(inputDateTimeString);
    const currentDateTime = new Date();
    return currentDateTime < inputDateTime;
  }, []);

  // Memoized function to accept order
  const AcceptOrder = useCallback(async () => {
    if (isCurrentDateTimeLessThanInput(data.scheduledDate, data.scheduledTime)) {
      try {
        await axios.post(`${url}/acceptapickup`, {
          SellerId: 'later',
          SellerMail: data.sellerEmail,
          DealerId: user.user.uid,
          DealerName: user.user.displayName,
          id: data.id,
        });

        notifications.show({
          color: 'green',
          title: 'Order Accepted',
          message: 'Make sure to reach the scheduled place on time',
          autoClose: 3000, // Adjust auto-close duration
          withCloseButton: false, // Removes the close button
          styles: {
            root: {
              position: 'fixed',
              top: '10px',
              right: '10px',
              zIndex: 1000, // Ensure it's above other elements
              width: '400px', // Square shape
              height: '60px', // Square shape
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '8px', // Slight rounding
              color: 'white',
              textAlign: 'center',
              fontSize: '14px',
              fontWeight: 'bold',
              padding: '10px', // Add padding for better spacing
            },
            title: {
              flexGrow: 1, // Makes the title take full height
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%', // Ensures full width
            },
            message: {
              fontsize: '20px', // Smaller font size
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            },
          },
        });        
        
      } catch (error) {
        console.error('Error accepting order:', error);
      }
    } else {
      notifications.show({
        color: 'red',
        title: 'Accept Failed',
        message: 'Order cannot be placed since the scheduled time has passed',
      });
    }
  }, [data, isCurrentDateTimeLessThanInput, user]);

  function getFilterDetails(values) {
    setCurrentRender(values.locationType)

    if(values.locationType === 'state'){
      getAllPickUpsWithInState()
    }else{
      getAllPickUpsWithInDistrict()
    }
  }

  const mainContent = useMemo(() => (
    <div className="ViewPickUp text-white flex flex-col item-baseline pb-[5vh] pl-[5vw] pr-[5vw] w-full">
      <Drawer
        styles={{
          content: { backgroundColor: '#16a34a', color: 'white' },
        }}
        opened={opened}
        onClose={close}
        withCloseButton={false}
      >
        <ScrapFilterForm getFilterDetails={getFilterDetails} currentRender={currentRender}/>
      </Drawer>

      <div className="flex flex-row pt-[1vw] pb-[3vw]">
        <div className="mt-10 text-4xl">
          <h1>VIEW PICKUPs</h1>
        </div>
        <Button
          height={35}
          width={35}
          className="shadow-[0px_3px_1.5px_0.5px_rgba(161,223,154,0.4)] hover:scale-[1.08] transition-all duration-200 bg-[#93ca12] rounded-[12px] mt-10 ml-5"
          variant="default"
          onClick={open}
        >
          <IconFilter />
        </Button>
        {showFirst && (
          <img
            onClick={resetMap}
            src={Img}
            loading="lazy"x
            width={35}
            className="shadow-[0px_3px_1.5px_0.5px_rgba(161,223,154,0.4)] hover:scale-[1.08] transition-all duration-200 bg-[#93ca12] rounded-[12px] mt-10 ml-5"
          />
        )}
      </div>

      <div className="flex">
        {showFirst && (
          <div>
            <div className="h-[600px] w-[60vw] mr-[20px] w-[50vw] rounded-md mt-1.5">
              <Map originLocation={currentLocation.current} destinationLocation={PickUpLocation} getDistance={getDistance} />
            </div>
            <div className="bg-green-700 h-[450px] mt-[1vw] mr-[20px] rounded-md flex flex-col">
              <div className="text-xl gap-1 border p-[0.1vh] m-[0.1vh] ml-[0.5vw] mr-[0.5vw] pl-[0.5vw] pr-[0.5vw] mt-[0.4vh] overflow-x-auto scrollbar-hide rounded-md">
                Seller : {data.sellerName}
              </div>
              <div className="text-xl gap-1 border p-[0.1vh] m-[0.1vh] ml-[0.5vw] mr-[0.5vw] pl-[0.5vw] pr-[0.5vw] overflow-x-auto scrollbar-hide rounded-md">
                location : {data.pickUpLocation}
              </div>
              <div className="text-xl gap-1 border p-[0.1vh] m-[0.1vh] ml-[0.5vw] mr-[0.5vw] pl-[0.5vw] pr-[0.5vw] overflow-x-auto scrollbar-hide rounded-md">
                Email : {data.sellerEmail}
              </div>
              <div className="text-xl gap-1 border p-[0.1vh] m-[0.1vh] ml-[0.5vw] mr-[0.5vw] pl-[0.5vw] pr-[0.5vw] overflow-x-auto scrollbar-hide rounded-md">
                expected weight : {data.estimatedWeight}
              </div>
              <div className="text-xl gap-1 border p-[0.1vh] m-[0.1vh] ml-[0.5vw] mr-[0.5vw] pl-[0.5vw] pr-[0.5vw] overflow-x-auto scrollbar-hide rounded-md">
                travel distance : {distance} km
              </div>
              <div className="text-xl gap-1 border p-[0.1vh] m-[0.1vh] ml-[0.5vw] mr-[0.5vw] pl-[0.5vw] pr-[0.5vw] overflow-x-auto scrollbar-hide rounded-md">
                travel time : {time}
              </div>
              <div className="text-xl gap-1 border p-[0.1vh] m-[0.1vh] ml-[0.5vw] mr-[0.5vw] pl-[0.5vw] pr-[0.5vw] overflow-x-auto scrollbar-hide rounded-md">
                Scheduled time : {data.scheduledTime}
              </div>
              <div className="text-xl gap-1 border p-[0.1vh] m-[0.1vh] ml-[0.5vw] mr-[0.5vw] pl-[0.5vw] pr-[0.5vw] overflow-x-auto scrollbar-hide rounded-md">
                Scheduled date : {data.scheduledDate}
              </div>
              <div className="text-xl w-full justify-between flex gap-1">
                <div></div>
                <button onClick={AcceptOrder} className="hover:scale-[1.08] cursor-pointer transition-all duration-200 bg-zinc-900 rounded-md mt-1 ml-3 p-[0.3vw]">
                  Accept
                </button>
                {showPopup && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white px-6 py-3 rounded-md shadow-lg">
          Order Accepted!
        </div>)}
                <div></div>
              </div>
            </div>
          </div>
        )}

        {(!showFirst || !showSecond) && (
          <div
            // onClick={() => setSelect(1)}
            className={
              showFirst
                ? 'w-[50vw] bg-green-700 m-[0.5vw] h-[1040px] overflow-y-auto scrollbar-hide p-[2vw] rounded-md'
                : 'w-[60vw] bg-green-700 m-[0.5vw] h-[1040px] overflow-y-auto scrollbar-hide p-[2vw] rounded-md'
            }
          >
            <div className="p-[1vw] bg-zinc-900 backdrop-blur-lg text-xl mb-4 rounded md">Live Pickups</div>
            <div className="w-full h-full overflow-y-auto scrollbar-hide transition-all duration-500 ease-in-out">
              {loading ? (
                <div className='flex items-center justify-center h-[1040px] w-full'>
                  <Loader size={50}/>
                </div>
              ) : (
                LivePickUps.length > 0 && <List_User_pickups LivePickUps={LivePickUps} locationGetter={locationGetter} />
              )}
            </div>
          </div>
        )}

        {(!showFirst || showSecond) && (
          <div>
            <div
              className={
                showFirst
                  ? 'w-[50vw] h-[220px] bg-green-700 m-[0.5vw] overflow-y-auto scrollbar-hide p-[2vw] rounded-md'
                  : 'w-[40vw] h-[220px] bg-green-700 m-[0.5vw] overflow-y-auto scrollbar-hide p-[2vw] rounded-md'
              }
            >
              <div className="p-[1vw] bg-zinc-900 backdrop-blur-lg text-xl mb-4 rounded md">Your next Pickup in</div>
              <div className='text-xl pl-3' >{timeLeft.days} <i>days</i></div>
              <div className='text-xl pl-3'>{timeLeft.hours} <i>hrs</i></div>
              <div className='text-xl pl-3'>{timeLeft.minutes} <i>min</i></div>
            </div>

            <div
              // onClick={() => setSelect(2)}
              className={
                showFirst
                  ? 'w-[50vw] bg-green-700 m-[0.5vw] h-[813px] overflow-y-auto scrollbar-hide p-[2vw] rounded-md'
                  : 'w-[40vw] bg-green-700 m-[0.5vw] h-[813px] overflow-y-auto scrollbar-hide p-[2vw] rounded-md'
              }
            >
              <div className="flex justify-between">
                <TextInput
                  label="Search a pickup"
                  required
                  w={400}
                  pb={50}
                  ml={9}
                  value={value}
                  onChange={(event) => setValue(event.currentTarget.value)}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  mt="md"
                  autoComplete="nope"
                  data-floating={floating}
                  labelProps={{ 'data-floating': floating }}
                />
                <Button  h={37} mt={15} mr={9} bg="#2b421c">
                  Search
                </Button>
              </div>

              <div className="p-[1vw] bg-zinc-900 text-xl mb-4  rounded-md">Upcoming pickups</div>
              <div className="w-full h-full overflow-y-auto scrollbar-hide transition-all duration-500 ease-in-out">
                {loading ? (
                <div className='flex items-center justify-center h-[813px] w-full'>
                  <Loader size={50}/>
                </div>
                ) : (
                  LivePickUps.length > 0 && <List_User_pickups LivePickUps={UpcommingPickUps} locationGetter={locationGetter} />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  ), [showFirst, showSecond, opened, PickUpLocation, data, time, distance, loading, LivePickUps, UpcommingPickUps, value, focused, floating, AcceptOrder, resetMap, open, close]);

  return mainContent;
};

export default ViewPickUp;