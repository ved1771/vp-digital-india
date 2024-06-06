import React, { useEffect, useState } from 'react';

const Headline = () => {
  const [userLocation, setUserLocation] = useState('');
  const [headline, setHeadline] = useState('Website Development Company');

  useEffect(() => {
    // Function to get user's location
    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            // Get the latitude and longitude
            const { latitude, longitude } = position.coords;
            // Call a function to convert coordinates to city name or use a reverse geocoding service
            const location = convertCoordinatesToCity(latitude, longitude); // Implement this function
            console.log("location " , location)
            setUserLocation(location);
          },
          (error) => {
            console.error('Error getting location:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser');
      }
    };

    getUserLocation();
  }, []);

  useEffect(() => {
    // Update headline based on user's location
    if (userLocation === 'Pune') {
      setHeadline('Website Development Company in Pune');
    } else if (userLocation === 'Delhi') {
      setHeadline('Website Development Company in Delhi');
    } else {
      // Default headline if user's location is not Pune or Delhi
      setHeadline('Website Development Company');
    }
  }, [userLocation]);

  // Function to convert coordinates to city name
  const convertCoordinatesToCity = async (latitude, longitude) => {
    const API_KEY = '';
    // const API_KEY = '6fb5a02664164b4cb20f09edd2d5df8a';
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${API_KEY}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  console.log("data", data.results[0].components.state)
      if (data.results.length > 0) {
        // Assuming the first result is the most relevant
        const city = data.results[0].components.state 
        setUserLocation(city);
        return city;
      } else {
        console.error('No results found');
        return null;
      }
    } catch (error) {
      console.error('Error converting coordinates to city:', error);
      return null;
    }
  };
  

  return (
    <div>
      <h1>{headline}</h1>
      {/* Other components and content */}
    </div>
  );
};

export default Headline;
