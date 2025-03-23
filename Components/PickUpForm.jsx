import axios from "axios";
import { useEffect, useRef, useState } from 'react';
import { Autocomplete, Loader, TextInput, Anchor, Box, Button, Text, Title } from '@mantine/core';
import { useForm } from "@mantine/form";
import { useAuth } from '../src/Context/AuthContext'
import { notifications } from "@mantine/notifications";


const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY; // Replace with your actual API key
const endpoint = "https://places.googleapis.com/v1/places:autocomplete";
const url = `${import.meta.env.VITE_BACKEND_URL}/schedulepickup`

const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
  ];

export function PickUpForm({getData}) {
    const timeoutRef = useRef(-1);
    const timeoutRefState = useRef(-1)
    const [loading, setLoading] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
    const [chooseLoc, setChooseLoc] = useState(false) 
    const currentLocation = useRef(null)
    const address = useRef(null)
    const [pressed, setPressed] = useState(false)

    const form = useForm({
        initialValues: {
            weight: null,
            location: '',
            date: "",
            time:"",
            PIN:"",
            district: "",
            state: ""
        },

        validate: {
            weight: (val) => ((/^[+]?\d*\.?\d+$/.test(val) && parseFloat(val)) > 0 ? null : 'invalid weight'),
            location: (loc) => (loc.length > 0 ? null : "enter a valid location"),
            date: (date) => (date.length > 0 ? null : 'please enter date'),
            time: (time) => (time.length > 0 ? null : "please enter time"),
            // PIN: (pin) => ((/^[1-9][0-9]{5}$/.test(pin) && pin.length === 6) ? null : "please enter a valid PIN code"),
            // district: (district) => (district.length > 0 ? null : "please enter time"),
            // state: (state) => (state.length > 0 ? null : "please enter time"),
        },
    })

    const user = useAuth()

    const getAddressFromCoordinates = async (lat, lng) => {
        try {
          const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`
          );
          const data = await response.json();
      
          if (data.status === "OK") {
            return data.results[0]?.formatted_address || "Address not found";
          } else {
            throw new Error("Geocoding failed: " + data.status);
          }
        } catch (error) {
          console.error("Error fetching address:", error);
          return "Error fetching address";
        }
    };
    

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            currentLocation.current = ({
              lat: position.coords.latitude,
              lng: position.coords.longitude
            })
            address.current = await getAddressFromCoordinates(currentLocation.current.lat, currentLocation.current.lng)
          },
          (error) => {
            if (error.code === error.PERMISSION_DENIED) {
              console.error("User denied location access");
            } else if (error.code === error.POSITION_UNAVAILABLE) {
              console.error("Location information is unavailable");
            } else if (error.code === error.TIMEOUT) {
              console.error("Location request timed out");
            }
          },
          { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 } 
        );
    }, []);



    const fetchSuggestions = async (input) => {
        if (!input) {
            setSuggestions([]);
            return;
        }
        try {
            const response = await axios.post(
                endpoint,
                {
                    input: input, // User input
                    languageCode: "en", // Language preference
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "X-Goog-Api-Key": apiKey, // Correct API key header
                        "X-Goog-FieldMask": "suggestions.placePrediction.text"
                    },
                }
            );
            
            if (response.data.suggestions) {
                const array = response.data.suggestions
                let brray = []
                array.forEach(element => {
                    brray.push(element.placePrediction.text.text)
                });
                brray = [...new Set(brray)];
                setSuggestions(brray)
            }
        } catch (error) {
            console.error("Error fetching autocomplete results:", error);
            setSuggestions([]);
        }
    }

    const handleChange = (val) => {
        window.clearTimeout(timeoutRef.current);
        form.setFieldValue('location', val)
        setSuggestions([]);

        if(val.trim().length === 0){
            setLoading(false);
        }else{
            setLoading(true);
            fetchSuggestions(val)
            timeoutRef.current = window.setTimeout(() => {
                setLoading(false);
            }, 500);
        }
    };

    const handleStateChange = (val) => {
        window.clearTimeout(timeoutRef.current);
        form.setFieldValue('state', val)

        if(val.trim().length === 0){
            setLoading(false);
        }else{
            setLoading(true);
            timeoutRef.current = window.setTimeout(() => {
                setLoading(false);
            }, 500);
        }   
    }

    function handleClick(e) {
        e.preventDefault()
        setChooseLoc(!chooseLoc)

        if(!chooseLoc){
            form.setFieldValue('location', address.current)
        }
    }

    const getLocationDetailsUsingLatLng = async () => {
    try {
        const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${currentLocation.current.lat},${currentLocation.current.lng}&key=${apiKey}`
        );

        if (response.data.status == "OK") {
            const addressComponents = response.data.results[0].address_components;
            const locationDetails = {};
    
            addressComponents.forEach(component => {
                if (component.types.includes("administrative_area_level_1")) {
                    locationDetails.state = component.long_name;
                }
                if (component.types.includes("administrative_area_level_2")) {
                    locationDetails.district = component.long_name;
                }
                if (component.types.includes("postal_code")) {
                    locationDetails.PIN = component.long_name;
                }
            });

                return locationDetails;
            } else {
            console.error("Geocoding failed:", response.data.status);
            return null;
            }
        } catch (error) {
            console.error("Error fetching location:", error);
            return null;
        }
    };

    const getLocationDetailsUsingAddress = async () => {
        try {
            const response = await axios.get(
                `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
                    form.values.location
                )}&key=${apiKey}`
            );
      
            if (response.data.status == "OK") {
                const addressComponents = response.data.results[0].address_components;
                const locationDetails = {};
    
                addressComponents.forEach(component => {
                    if (component.types.includes("administrative_area_level_1")) {
                        locationDetails.state = component.long_name;
                    }
                    if (component.types.includes("administrative_area_level_2")) {
                        locationDetails.district = component.long_name;
                    }
                    if (component.types.includes("postal_code")) {
                        locationDetails.PIN = component.long_name;
                    }
                });
                
                return locationDetails;
            } else {
                console.error("Geocoding failed:", response.data.status);
                return null;
            }
        } catch (error) {
            console.error("Error fetching location:", error);
            return null;
        }
    };

    async function SubmitPickUp(){
        setPressed(true)
        let locationDetails;

        if (!chooseLoc) {
            locationDetails = await getLocationDetailsUsingAddress();
            locationDetails.PIN = 'prototipic'
        } else {
            locationDetails = await getLocationDetailsUsingLatLng();
        }

        if (!locationDetails) {
            throw new Error("Failed to fetch location details.");
        }

        try{
            const data = {
                sellerName: user.user.displayName,
                sellerEmail: user.user.email,
                pickUpLocation: form.values.location,
                estimatedWeight: form.values.weight,
                scheduledTime: form.values.time,
                scheduledDate: form.values.date,
                pickUpPin: locationDetails.PIN,
                pickUpDistrict: locationDetails.district,
                pickUpState: locationDetails.state
            }

            const response = await axios.post(url,data)
            notifications.show({
                color: 'green',
                title: 'Order Placed',
                message: 'keep tone for our response'
            })
            setPressed(false)
        }catch(error){  
            console.error(error)
            notifications.show({
                color: 'red',
                title: 'Order Failed',
                message: error.message
            })
            setPressed(false)
        }
    }

    const handleBlur = () => {
        if (!suggestions.includes(form.values.location)) {
          form.setFieldValue('location', "")
        }
    };

    const handleStateBlur = () => {
        if (!indianStates.includes(form.values.state)) {
            form.setFieldValue('state', "")
          }
    }


    return (
    <form onSubmit={form.onSubmit(SubmitPickUp)} className="h-fit bg-green-700 border w-fit p-[2vw] rounded-md">
        <Title className="flex items-center gap-x-3">
            <div className='p-[1vw] bg-zinc-900 w-[20vw] text-xl text-center mb-4 text-white rounded md'>Schedule Pickup</div>
            {
                pressed &&  <Loader color="green" size={30} mb={20}/>
            }
        </Title>

        <TextInput
            required
            value={form.values.weight}
            radius='md'
            onChange={(event) => form.setFieldValue('weight', event.currentTarget.value)}
            label="Estimated Weight (in Kg)"
            error={form.errors.weight && 'Invalid weight'}
            placeholder="eg. 3.5"
            w={450}
        />   

        <Box sx={{ position: "absolute"}}>
            <Autocomplete
                required
                value={form.values.location}
                disabled={chooseLoc}
                data={suggestions}
                onChange={handleChange}
                rightSection={loading ? <Loader size={16} /> : null}
                onBlur={handleBlur}
                label="Choose location"
                error={form.errors.location}
                placeholder={!chooseLoc ? "type location" : address.current}
                w={450}
                styles={{
                    dropdown: { backgroundColor: "black" }, 
                    item: { color: "black" }, 
                }}
            />
            <Anchor underline="false" href="#" style={{color:'cyan'}} onClick={handleClick} pt={2} fw={500} fz="xs">
                {
                    chooseLoc ? "choose random location" : "deliver to your location"
                }
            </Anchor>
        </Box>

        <div className="w-[30vw]">
           <b>Note:</b><i>{" "}{" "}If you are choosing a random address, make sure to keep it as detailed as possible. Giving undetailed address may result in your request getting unattended.</i>
        </div>

        {/* <TextInput
            required
            value={form.values.PIN}
            radius='md'
            onChange={(event) => form.setFieldValue('PIN', event.currentTarget.value)}
            label="PIN code"
            error={form.errors.PIN}
            placeholder="six-digits"
            w={400}
        />  

        <TextInput
            required
            value={form.values.district}
            radius='md'
            onChange={(event) => form.setFieldValue('district', event.currentTarget.value)}
            label="District"
            error={form.errors.district}
            placeholder="enter your district"
            w={400}
        />  

        <Autocomplete
            required
            value={form.values.state}
            data={indianStates}
            onChange={handleStateChange}
            onBlur={handleStateBlur}
            label="State"
            error={form.errors.state}
            placeholder="enter your state"
            w={400}
            styles={{
                dropdown: { backgroundColor: "black" }, 
                item: { color: "white" }, 
            }}
        /> */}

        <div className="mt-[2vw]">
            {/* <label htmlFor="dateInput" className="text-md">Pick a date : </label> */}
            <input
                required
                id="dateInput"
                error={form.errors.date}
                type="date"
                value={form.values.date}
                onChange={(event) => form.setFieldValue('date', event.currentTarget.value)}
                style={{
                padding: "4px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                fontSize: "16px",
                }}
            />
        </div>

        <div className="mt-[1vw]">
            {/* <label htmlFor="timeInput" className="text-md">Pick a time : </label> */}
            <input
                required
                error={form.errors.time}
                id="timeInput"
                type="time"
                value={form.values.time}
                onChange={(event) => form.setFieldValue('time', event.currentTarget.value) }
                style={{
                padding: "4px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                fontSize: "16px",
                }}
            />
        </div>
        <div className="flex justify-between">
            {/* <div></div> */}
            <Button type="submit" disabled={pressed} className="hover:scale-[1.08] transition-all duration-200 rounded-md mt-3 p-[0.3vw] hover:outline hover:outline-[3px] outline-[#209868]" color="#1B2316"> Order </Button>
            {/* <div></div> */}
        </div>
    </form>

  );

}


export default PickUpForm;
