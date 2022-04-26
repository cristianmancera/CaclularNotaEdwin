
const FONDO = document.getElementById("fondo");
const check1 = document.getElementById("check1");
const check2 = document.getElementById("check2");
const check3 = document.getElementById("check3");
const check4 = document.getElementById("check4");
const result = document.getElementById("result");


const winBtn = document.getElementById("winBtn");
const honorBtn = document.getElementById("honorBtn");
const getBtn = document.getElementById("getBtn");


FONDO.classList.add("default");
check1.addEventListener("click", cambio);
check2.addEventListener("click", cambio);
check3.addEventListener("click", cambio);
check4.addEventListener("click", cambio);
winBtn.addEventListener("click", function(){
    const NAME = document.getElementById("name").value;
    const N1 = document.getElementById("note1").value;
    const N2 = document.getElementById("note2").value;
    const NMISSING = document.getElementById("note3");
    if(N1<1 || N1>5 || N2<1 || N2>5){
        result.value = "Verifique los campos";
        result.style.color = "red"
    }else{
        result.style.color = "grey"
        

        const PROCESS1 = (0.3*N1) + (0.3 * N2);
        const PROCESS2 = 3.4 - PROCESS1;
        const FOUNDED = PROCESS2/0.4;
        const DEF = FOUNDED.toFixed(2);
        result.value = 'La nota que necesita para ganar la materia es:' + DEF;
    }
    
});
honorBtn.addEventListener("click", function(event) {
    const NAME = document.getElementById("name").value;
    const N1 = document.getElementById("note1").value;
    const N2 = document.getElementById("note2").value;
    const NMISSING = document.getElementById("note3");
    if(N1<1 || N1>5 || N2<1 || N2>5){
        result.value = "Verifique los campos";
        result.style.color = "red"
    }else{
        result.style.color = "grey"
        

        const PROCESS1 = (0.3*N1) + (0.3 * N2);
        const PROCESS2 = 4.0 - PROCESS1;
        const FOUNDED = PROCESS2/0.4;
        const DEF = FOUNDED.toFixed(2);
        result.value = 'La nota que necesita para cuadro de honor es:' + DEF;
    }
    
});



getBtn.addEventListener("click", function(event){

    const NAME = document.getElementById("name").value;
    const N1 = document.getElementById("note1").value;
    const N2 = document.getElementById("note2").value;
    const NMISSING = document.getElementById("note3");

    if(N1<1 || N1>5 || N2<1 || N2>5){
        result.value = "Verifique los campos";
        result.style.color = "red"
    }else{
        result.style.color = "grey" 
        const PROCESS1 = (0.3*N1) + (0.3 * N2);
        const PROCESS2 = 2 - PROCESS1;
        const FOUNDED = PROCESS2/0.4;
        const DEF = FOUNDED.toFixed(2);
        result.value = 'La nota que necesita para sacar para una nota recuperable es: ' + DEF;
    }
});
function cambio(event){
    opcion = event.target.id;
    if(opcion=="check1"){
        passDefault()
    }else if(opcion=="check2"){
        passDark()
    }else if(opcion=="check3"){
        passBlue()
    }else if(opcion=="check4"){
        passRed()
    }
}
function passDefault(){
    FONDO.classList.remove("dark");
    FONDO.classList.remove("blue");
    FONDO.classList.remove("red");
    FONDO.classList.add("default");
}
function passDark(){
    FONDO.classList.remove("default");
    FONDO.classList.remove("blue");
    FONDO.classList.remove("red");
    FONDO.classList.add("dark");
}
function passBlue(){
    FONDO.classList.remove("default");
    FONDO.classList.remove("dark");
    FONDO.classList.remove("red");
    FONDO.classList.add("blue");
}
function passRed(){
    FONDO.classList.remove("default");
    FONDO.classList.remove("dark");
    FONDO.classList.remove("blue");
    FONDO.classList.add("red");
}