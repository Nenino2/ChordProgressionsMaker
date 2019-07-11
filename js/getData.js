const getData = async function(cp = '') {
  try {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const entry_prefix = 'https://api.hooktheory.com/v1/';
    const entry_main = 'trends/nodes';
    const activkey = '45cd77cf2aacdad8a1464257078599af';
    cp !== '' ? (cp = `?cp=${cp}`) : '';

    const response = await fetch(entry_prefix+entry_main+cp, {
      method: 'GET',
      headers: {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json',
        'Authorization': `Bearer ${activkey}`
      }
    });
    console.log(response);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export default getData;
