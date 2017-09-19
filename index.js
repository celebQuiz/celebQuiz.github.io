
var time = 0;
var newTime = 0;
function timer() {
    time++;
    console.log(time); 
}
window.onload = function() {
    setInterval(timer, 1000);
}
// конструктур за имена на известни
class addCeleb {
    constructor(name, wage, salaryStr, sex) {
        this.cName = name; // име
        this.cSalary = wage; // заплата
        this.rSalary = salaryStr; // заплата на стринг (1 000 000)
        this.cSex = sex;
    }
}
// функция за попълване на информацията за тях
function fillStuff(celeb) {
    celebSalary=celeb.cSalary;
    celebAnswer=celeb.rSalary;
    celebName=celeb.cName;
    celebSex=celeb.cSex;
}
// въведи известните имена тук
var dJohnson = new addCeleb('Dwayne "The Rock" Johnson', 65000000, '65 000 000', 'He');
var chrisPrat = new addCeleb('Chris Pratt', 13000000, '13 000 000', 'He');
var rayanReynolds = new addCeleb('Rayan Reynolds', 21500000, '21 500 000 $', 'He');
var chrisHemsworth = new addCeleb('Chris Hemsworth', 31500000, '31 500 000 $', 'He');
var robertDowney = new addCeleb('Robert Downey Jr.', 48000000, '48 000 000 $', 'He');
var jackieChan = new addCeleb('Jackie Chan', 49000000, '49 000 000 $', 'He');
var vinDiesel = new addCeleb('Vin Diesel', 54500000 ,'54 500 000 $', 'He');
var ladyGaga = new addCeleb('Lady Gaga', 90000000, '90 000 000 $', 'She');
var justinBieber = new addCeleb('Justin Bieber', 53000000, '53 000 000 $', 'He');
var tUsher = new addCeleb('Usher', 46000000, '46 000 000 $', 'He');
var taylorSwift = new addCeleb('Taylor Swift', 45000000, '45 000 000 $', 'She');
var katyPerry = new addCeleb('Katy Perry', 44000000, '44 000 000 $', 'She');
var beyonceK = new addCeleb('Beyonce Knowles', 35000000 ,'35 000 000 $', 'She');

// promenlivi

// kolko godini trqbva da rabotish za da izravnish zaplatata
var workYears = 0;
// zaplata na potrebitelq
var userSalary = 0;
// zaplata na zvezdata
var celebSalary ;
// ime na zvezdata
var celebName;
// zaplata kato string
var celebAnswer;
// Пол
var celebSex;
var celebEarnings;

// Премахва растоянията (space) в input полето за да може
// да се пресмята заплатата
$(function(){
    var txt = $("input#userSalary");
    var func = function(e) {
      if(e.keyCode === 32){
        txt.val(txt.val().replace(/\s/g, ''));
      }
    }
    txt.keyup(func).blur(func);
});
currDate = new Date();
var currYear = currDate.getFullYear();

// funkciq za izchisleniq
function caclSalary() {
    document.getElementById('result').style.visibility = "visible";
    // zapazva zaplatata na potrebitelq v promenliva userSalary
    userSalary = document.getElementById('userSalary').value;
    // zapazva izbrana zvezda v promenliva celebSalary
    celebSalary = document.getElementById("mStars");
    celebChoice = celebSalary.options[celebSalary.selectedIndex].value;
    console.log(celebChoice);
    // proverka dali e vuvedeno chislo v pole userSalary
    if (isNaN(userSalary) || userSalary == 0) {
        alert('Please enter your salary!');
        document.getElementById('result').style.visibility(hidden);
    }
    // proverka dali e izbrana zvezda
    if (celebChoice === "default") {
        alert('Please choose a celebrity!');
        document.getElementById('result').style.visibility(hidden);
    }
// pravi zaplatata godishna
    userSalary = userSalary*12;
// ako se izbere dadena zvezda se populvat slednite danni
    if (celebChoice === "theRock") {
        fillStuff(dJohnson);
    }
    if (celebChoice === "cPrat") {
        fillStuff(chrisPrat);
    }
    if (celebChoice === "rReynolds") {
       fillStuff(rayanReynolds);
    }
    if (celebChoice === "cHemsworth") {
       fillStuff(chrisHemsworth);
    }
    if (celebChoice === "rDowney") {
        fillStuff(robertDowney);
    }
    if (celebChoice === "jChan") {
        fillStuff(jackieChan);
    }
    if (celebChoice === "vDiesel") {
        fillStuff(vinDiesel);
    }
    if (celebChoice === "lGaga") {
       fillStuff(ladyGaga);
    }
    if (celebChoice === "jBieber") {
        fillStuff(justinBieber);
    }
    if (celebChoice === "usher") {
       fillStuff(tUsher);
    }
    if (celebChoice === "tSwift") {
        fillStuff(taylorSwift);
    }
    if (celebChoice === "kPerry") {
        fillStuff(katyPerry);
    }
    if (celebChoice === "beyonce") {
        fillStuff(beyonceK);
    }


    // izchisleniq za godinite
    workYears = celebSalary/userSalary;
    // Изчисления за колко време изкарва месечната заплата на потребителя
    var celebEarnPerSec = celebSalary/31556926;
    var celebEarnUserSalary = +(userSalary/celebEarnPerSec)/12;
    var date = new Date(celebEarnUserSalary * 1000);
    var d = date.getDay();
    var hh = date.getUTCHours();
    var mm = date.getUTCMinutes();
    var ss = date.getSeconds();
    var t = hh + " hour "+ " and " + mm + " minutes";
    if (hh === 0) {
        t =  mm + " minutes";
    }
    if (hh > 1) {
        t = hh + " hours "+ " and " + mm + " minutes";
    }
    if (mm === 1) {
        t = hh + " hours "+ " and " + mm + " minute";
    }
    // premahva chisla sled zapetaqta
    workYears = workYears.toFixed(0);
    // prevrushta workYears v chislo
    var sumYears = (currYear + +workYears);
    // izvejda rezultata
        document.getElementById('result').innerHTML =
        celebName + ' earned ' + celebAnswer + ' in the past year.' + '<br>'
        + 'You have to work ' + workYears + ' years to earn that much!' + '<br>'
        + 'You will be done by the year ' + +sumYears +'!' + '<br>'
        + celebSex + ' earns ' + ' your salary ' + ' for ' + t + '!' + '<br>'
        + 'Since you`ve been using this page ' + celebSex.toLowerCase() + ' earned: <br> ';
        // Функция за обновяване на изкараното за секунда от звездата
        function setResult() {
        document.getElementById('earningTime').style.visibility = "visible";
        celebEarnings = (time*(celebEarnPerSec)).toFixed(2);
        document.getElementById('earningTime').innerHTML = celebEarnings + ' $' + ' !';
        }
        // настройва интервал за да се обновява всяка секунда
        var bla =  setInterval(setResult,1000);   
      document.getElementById("clear").style.visibility = "visible"; 
    // зануляване на стойностите
      function clearTime() {
        celebEarnings = 0;
        clearInterval(bla);
        document.getElementById('earningTime').style.visibility = "hidden";
        document.getElementById("mStars").selectedIndex = "default";
        celebChoice = "";
        celebAnswer = "";
        workYears = 0;
        sumYears = 0;
        celebSex = "";  
        document.getElementById('result').style.visibility = "hidden";
    }
    document.getElementById('clear').onclick = clearTime;
}  

    

 

