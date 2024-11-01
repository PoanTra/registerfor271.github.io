function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSibar(){
    const hideSibar = document.querySelector('.sidebar')
    hideSibar.style.display = 'none'
}
function hidebtn(){
    const hidebtn = document.querySelector('.btn')
    hidebtn.style.display = 'none'
}

var languageSelectinfo = {
    បារាំង:{
        A1:["A1-1", "A1-2", "A1-3","A1-4","A1-5" , "A1-6"],
        A2:["A2-1", "A2-2", "A2-3","A2-4","A2-5" , "A2-6"],
        B1:["B1-1", "B1-2", "B1-3","B1-4","B1-5" , "B1-6"],
        B2:["B2-1", "B2-2", "B2-3","B2-4","B2-5" , "B2-6"],
    },
    អង់គ្លេស:{
        Beginner:["BGN1", "BGN2", "BGN3"],
        Elementary:["ELE1", "ELE2", "ELE3"],
        "Pre-Intermediate":["PRE-INTER1", "PRE-INTER2", "PRE-INTER3"],
        Intermediate:["INTER1", "INTER1", "INTER1"],
        "Upper-Intermediate":["UPPER1", "UPPER2", "UPPER3"],
    },
    ចិន:{
        "Easy Steps to chinese 1":["GCP1","GCP2","GCP3"],
        "Easy Steps to chinese 2":["GCP4","GCP5","GCP6"],
        "Easy Steps to chinese 3":["GCP7","GCP8","GCP9"],
        "Easy Steps to chinese 4":["GCP10","GCP11","GCP12"],
        "Easy Steps to chinese 5":["GCP13","GCP14","GCP15"],
    }
}
var shiftTime = {
    "ចន្ទ-សុក្រ":{
        "11h30-12h30":[],
        "12h30-13h30":[],
        "16h00-17h00":[],
        "17h30-18h30":[],
        "18h30-19h30":[],
        "19h30-20h30":[],
    },

    "សៅរ៍-អាទិត្យ":{
        "09h00-11h00":[],
        "13h00-15h00":[],
        "15h00-17h00":[],
        "17h30-19h30":[],
    },
    "សុក្រ-អាទិត្យ":{
        "14h00-16h00":[],
    },
    "ចន្ទ-ពុធ-សុក្រ":{
        "09h00-10h30":[],
    },
    "ចន្ទ-អង្គារ-ពុធ":{
        "17h00-18h30":[],
    },
    "ពុធ-សៅរ៏-អាទិត្យ":{
        "15h00-17h00":[],
    }
}

window.onload = function(){
    const selectLanguage = document.getElementById('Language');
    const selectLevel = document.getElementById('level');
    const selectTerm = document.getElementById('term');
    const select = document.querySelectorAll('select');
 
    selectLevel.disabled = true;
    selectTerm.disabled = true;

    select.forEach(select => {
        if(select.disabled == true){
            select.style.cursor = "auto"
        }
    })
    for(let language in languageSelectinfo){
        console.log(language);
        selectLanguage.options[selectLanguage.options.length] = new Option(language, language)
    }
    selectLanguage.onchange = (e) => {
        selectLevel.disabled = false
        selectTerm.disabled = true

        selectLevel.length = 1
        selectTerm.length = 1
        
        for(let level in languageSelectinfo[e.target.value]){
            console.log(level);
            selectLevel.options[selectLevel.options.length] = new Option(level, level)
        }
    }
    selectLevel.onchange = (e) => {
        selectTerm.disabled = false

        selectTerm.length = 1

        let term = languageSelectinfo[selectLanguage.value][e.target.value]

        for(let i=0; i<term.length; i++){
            selectTerm.options[selectTerm.options.length] = new Option(term[i], term[i])
        }
    }


    const selectDay = document.getElementById('day');
    const selectTime = document.getElementById('time');

    selectTime.disabled = true;
    
    for(let Day in shiftTime){
        console.log(Day);
        selectDay.options[selectDay.options.length] = new Option(Day, Day)
    }
    selectDay.onchange = (e) => {
        selectTime.disabled = false

        selectTime.length = 1 

        for(let Time in shiftTime[e.currentTarget.value]){
            console.log(Time);
            selectTime.options[selectTime.options.length] = new Option(Time, Time)
        }
    }
}


const form = document.querySelector('#form')

form.addEventListener("submit" , (e) =>{
    e.preventDefault()

    var text_Nkhmer = document.querySelector("#text_Nkhmer").value
    var text_Nenglish = document.querySelector("#text_Nenglish").value
    var sex = document.querySelector("#sex").value
    var birthday = document.querySelector("#birthday").value
    var text_PhoneNum = document.querySelector("#text_PhoneNum").value
    var skill = document.querySelector("#skill").value
    var school = document.querySelector("#school").value
    var year = document.querySelector("#year").value
    var address = document.querySelector("#address").value

    var NewOrOld = document.querySelector("#NewOrOld").value
    var Class = document.querySelector("#class").value
    var Language = document.querySelector("#Language").value
    var term = document.querySelector("#term").value
    var day = document.querySelector("#day").value
    var time = document.querySelector("#time").value


    var token = "7919041010:AAEqjFza-NSkZ8oVuZ46xqR6fkJ8HDV-bq0";

    var chat_id = "-4562360768"

    var my_text = ` - ឈ្មោះជាអក្សរខ្មែរ : ${text_Nkhmer} 
    %0A - ឈ្មោះជាអក្សរឡាតាំង : ${text_Nenglish}
    %0A - ភេទ : ${sex}
    %0A - ថ្ងៃខែឆ្នាំកំណើត : ${birthday} 
    %0A - លេខទូរសព្ទ : ${text_PhoneNum}
    %0A - សិស្ស​ : ${NewOrOld}
    %0A - ថ្នាក់​ : ${Class}
    %0A - រៀនភាសា : ${Language}
    %0A - កម្រិតសិក្សា : ${term}
    %0A - វេនសិក្សា​ : ${day}
    %0A - ម៉ោងសិក្សា : ${time}
    %0A - គ្រឹះស្ថានផ្សេងដែលកំពុងសិក្សា : ${school}
    %0A - ជំនាញ : ${skill}
    %0A - ឆ្នាំទី : ${year}
    %0A - ទីលំនៅបច្ចុប្បន្ន : ${address}`

    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

})

const txt1 = document.getElementById('text_Nkhmer');
const txt2 = document.getElementById('text_Nenglish');
const txt3 = document.getElementById('sex');
const txt4 = document.getElementById('birthday');
const txt5 = document.getElementById('text_PhoneNum');
const txt6 = document.getElementById('Language');
const txt7 = document.getElementById('term');
const txt8 = document.getElementById('school');
const txt9 = document.getElementById('skill');
const txt10 = document.getElementById('year');
const txt11 = document.getElementById('address');
const txt12 = document.getElementById('NewOrOld');
const txt13 = document.getElementById('class');
const txt14 = document.getElementById('day');
const txt15 = document.getElementById('time');

const btn1 = document.getElementById('mySubmit');
const out1 = document.getElementById('output1');

function fun1(){
    out1.innerText = `- ឈ្មោះជាអក្សរខ្មែរ : ${txt1.value} 
    - ឈ្មោះជាអក្សរឡាតាំង : ${txt2.value} 
    - ភេទ : ${txt3.value}
    - ថ្ងៃខែឆ្នាំកំណើត : ${txt4.value}
    - លេខទូរសព្ទ : ${txt5.value}
    - សិស្ស​ : ${txt12.value}
    - ថ្នាក់​ : ${txt13.value}
    - រៀនភាសា : ${txt6.value}
    - កម្រិតសិក្សា : ${txt7.value}
    - វេនសិក្សា​ : ${txt14.value}
    - ម៉ោងសិក្សា : ${txt15.value}
    - គ្រឹះស្ថានផ្សេងដែលកំពុងសិក្សា : ${txt8.value}
    - ជំនាញ : ${txt9.value}
    - ឆ្នាំទី : ${txt10.value}
    - ទីលំនៅបច្ចុប្បន្ន : ${txt11.value}`
}

btn1.addEventListener('click',fun1);

function copyText() {
    
    // Copy the text to the clipboard using navigator.clipboard API
    navigator.clipboard.writeText(out1.innerText).then(() => {
        alert("text copied!");
    }).catch(err => {
        console.error("Failed to copy text: ", err);
    });
}