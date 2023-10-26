const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzUzMjBkNzY3YzgwZGEwZDU0ZDlkMjQxMjdlOWVkOSIsInN1YiI6IjY1MmZjOGM3MzU4ZGE3NWI2MWZhMDRlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uj9aWONZob_7Jpf-N2mmPcPhP4I0g9jVTWaqGFETuaE',
  },
};

export const fetchMovies = async (url) => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
