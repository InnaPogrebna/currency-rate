const BASE_URL = 
  'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

  export const getCurrency = async () => {
    try {
      const response = await fetch(`${BASE_URL}`);
  
      return await response.json();
    } catch (error) {
      return 'error';
    }
  };