const baseURL = `http://localhost:4000/api`;

//Fortune Button
let fortuneBtn = document.getElementById('getFortune');

function fortuneAlert(event){
    axios.get(`${baseURL}/fortune/`).then(function(response){
        const data = response.data;
        alert(data);
    });
};

fortuneBtn.addEventListener("click", fortuneAlert);


//Add Fortune
let fortuneTxtBox = document.getElementById('fortuneText');
let addFortuneBtn = document.getElementById('fortuneAddBtn');
let btnText = fortuneTxtBox.value;
console.log(btnText)

function createFortune(body) {
    axios.post(`${baseURL}/fortune/`, body).then(function (response) {
        let data = response.data;
        console.log(data)
    });
};

addFortuneBtn.addEventListener("click", createFortune(btnText));


