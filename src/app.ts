const form = document.querySelector('form');
const addressInput = document.getElementById('address') as HTMLInputElement;

const searchAddressHandler = (event: Event) => {
  event.preventDefault();

  const enteredAddrss = addressInput;
};

form?.addEventListener('submit', searchAddressHandler);
