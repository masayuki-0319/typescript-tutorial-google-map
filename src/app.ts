require('dotenv').config();
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY as string;
console.log('GOOGLE_API_KEY', GOOGLE_API_KEY);

const form = document.querySelector('form');
const addressInput = document.getElementById('address') as HTMLInputElement;

const searchAddressHandler = (event: Event) => {
  event.preventDefault();

  const enteredAddrss = addressInput;
};

form?.addEventListener('submit', searchAddressHandler);
