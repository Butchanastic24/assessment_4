const baseURL = `http://localhost:4000/api`;

//Fortune Button
let fortuneBtn = document.getElementById('getFortune');
let permaFortune

function fortuneAlert(event){
    axios.get(`${baseURL}/fortune/`).then(function(response){
        data = response.data;
        alert(data);

        permaFortune = data;
    });
};

fortuneBtn.addEventListener("click", fortuneAlert);



//Add Fortune to List
let addFortuneBtn = document.getElementById('fortuneAddBtn').onclick = function() {
    let fortuneTxtBox = document.getElementById('fortuneText').value;
    
    axios.post(`${baseURL}/fortune/`, {newFortune: fortuneTxtBox}).then(function (response) {
        console.log(response);
    });
};




//Save recent fortune / remove it
let frtnUl = document.getElementById('fortuneLi');
let saveBtn = document.getElementById('saveBtn');

let frtnDelBtn = document.createElement("button");
let frtnLi = document.createElement("li");


function addFortune(event) {

    frtnLi.textContent = permaFortune;

    frtnDelBtn.innerText = "X";
    
    frtnLi.appendChild(frtnDelBtn);
    frtnUl.appendChild(frtnLi);

    frtnDelBtn.onclick = function() {
        frtnDelBtn.parentElement.remove();
    };
}; 

saveBtn.addEventListener("click", addFortune);

//Delete recent fortune from list
let permaDelete = permaFortune;

let delRecent = document.getElementById('deleteRecent').onclick = function() {

    axios.delete(`${baseURL}/fortune/`, {delFortune: permaDelete}).then(function (response) {
        console.log(response.data);
    });

};