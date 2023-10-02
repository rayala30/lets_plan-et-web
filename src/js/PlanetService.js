// Use this API to fetch info on offered packages?
const RAILWAY_API_BASE = "https://letsplan-et-server-production.up.railway.app/api/v1/sites"

export async function getSites() {

//     fetch(RAILWAY_API_BASE, {
//         method: 'GET'
//     })
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     return data;
//   })
//   .catch(error => {
//     console.log('ERROR: ', error)
//   });

try {
    const response = await fetch(RAILWAY_API_BASE);
    const data = await response.json();
    return data;
} 
catch (error) {
    console.log('ERROR')
}

}







// method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       username: 'user',
//       password: 'password'
//     })