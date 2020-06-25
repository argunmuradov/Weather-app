/* Global Variables */
let data = { 'temprature': '72', 'date': '6.26.2020', 'userResponse': 'nice' };
const settings = {
    method: 'POST',
        credentials: 'same-origin',
            headers: {
        'Content-Type': 'application/json',
        },
    body: JSON.stringify(data),
}
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();


const getData = async(url) => {
    const res = await fetch(url);
    try {
        const data = await res.json();
        console.log(data);
    }
    catch(error) {
        console.log("error", error);
    }
}

const postData = async ( url = '', data = {}) => {
    const response = await fetch(url, settings);

    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch(error) {
        console.log('went wrong');
        console.log('error', error);
    }
    
}
console.log('adding data..');
console.log(data);
postData('/addData', data);
console.log('recieving data...');
getData('/getData');