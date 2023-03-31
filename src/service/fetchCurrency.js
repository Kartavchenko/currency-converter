import { Notify } from "notiflix/build/notiflix-notify-aio";

const options = {
	method: 'GET',
	headers: {
		"apikey": "wWVzAmTq3V6DuJfoLnbC71EAuxfWp6ME",
	}
};

export const fetchRequestFirstField = async (to = "UAH", from = "USD", amount = "1") => {
  try {
    const response = await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, options);

    if (!response.ok) {
      throw new Error(`Could not fetch, received ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    Notify.failure(`Something went wrong: ${error.message}`);
  }
}

export const fetchRequestSecondField = async (to = "USD", from = "UAH", amount = "1") => {
  try {
    const response = await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, options);

    if (!response.ok) {
      throw new Error(`Could not fetch, received ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    Notify.failure(`Something went wrong: ${error.message}`);
  }
}

export const fetchCurrencyUSD = async () => {
  try {
    const response = await fetch("https://api.apilayer.com/exchangerates_data/convert?to=USD&from=UAH&amount=1", options);

    if (!response.ok) {
      throw new Error(`Could not fetch current exchange, received ${response.status}`);
    }

    const data = await response.json();
    return data.result;
  } catch (error) {
    Notify.failure(`Something went wrong: ${error.message}`);
  }
}

export const fetchCurrencyEUR = async () => {
  try {
    const response = await fetch("https://api.apilayer.com/exchangerates_data/convert?to=EUR&from=UAH&amount=1", options);

    if (!response.ok) {
      throw new Error(`Could not fetch current exchange, received ${response.status}`);
    }

    const data = await response.json();
    return data.result;
  } catch (error) {
    Notify.failure(`Something went wrong: ${error.message}`);
  }
}