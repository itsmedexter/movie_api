//  fetching api data using axios, async and await

const fetchData = async () => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: '3dd6a7a4',
      s: 'avengers',
    },
  });

  console.log(response.data);
};

fetchData();
