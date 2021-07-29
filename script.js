function promiseFunction() {
    axios.get('https://reqres.in/api/users/5').then(result => {
        console.log('DATA promise => ', result.data.data)
        let img = document.createElement('img');
        img.src = result.data.data.avatar;
        document.getElementById('profile').appendChild(img);
        document.getElementById('fname').innerText = result.data.data.first_name;
        document.getElementById('lname').innerText = result.data.data.last_name;
        document.getElementById('email').innerText = result.data.data.email;
    }).catch(error => {
        console.log(`error`, error)
    })
}
async function awaitFunction() {
    try {
        let result = await axios.get('https://reqres.in/api/users/5');
        console.log('DATA  async await => ', result.data.data)
        let img = document.createElement('img');
        img.src = result.data.data.avatar;
        document.getElementById('profile').appendChild(img);
        document.getElementById('fname').innerText = result.data.data.first_name;
        document.getElementById('lname').innerText = result.data.data.last_name;
        document.getElementById('email').innerText = result.data.data.email;
    } catch {
        console.log(`error =>`, error)
    }
}
//promiseFunction();
awaitFunction();
