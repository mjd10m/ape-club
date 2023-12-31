// this file will contain connection for rapidApi 


export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises',
  params: {limit:'10000'},
  headers: {
    'X-RapidAPI-Key': 'd8f4acfaafmsh692895d5aee0b51p16334cjsnc19b76761dd1',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '584c0f284bmsh4c28958b02b2107p1da852jsnfc072f57e955',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};



// below contains response and data formatting from API's
export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};

