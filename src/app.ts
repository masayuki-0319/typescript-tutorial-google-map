import axios from 'axios';

require('dotenv').config();
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY as string;
console.log('GOOGLE_API_KEY', GOOGLE_API_KEY);

const form = document.querySelector('form');
const addressInput = document.getElementById('address') as HTMLInputElement;

type GoogleGeoCodingResponse = {
  status: 'OK';
  results: { geometry: { location: { lat: number; lng: number } } }[];
};

const searchAddressHandler = (event: Event) => {
  event.preventDefault();

  const enteredAddrss = encodeURI(addressInput.value);

  axios
    .get<GoogleGeoCodingResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${enteredAddrss}&key=${GOOGLE_API_KEY}`
    )
    .then((res) => {
      if (res.data.status !== 'OK') {
        throw new Error('座標を取得できませんでした。');
      }

      const coordinates = res.data.results[0].geometry.location;
      const map = new google.maps.Map(
        document.getElementById('map') as HTMLInputElement,
        {
          center: coordinates,
          zoom: 16,
        }
      );
      new google.maps.Marker({ position: coordinates, map: map });
    })
    .catch((err) => {
      alert(err.message);
      console.error(err);
    });
};

form?.addEventListener('submit', searchAddressHandler);
