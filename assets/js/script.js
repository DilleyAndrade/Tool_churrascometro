
let inputMan = document.getElementById("inputman")
let inputWoman = document.getElementById("inputwoman")
let inputKids = document.getElementById("inputkid")
let inputTime = document.getElementById("inputtime")
let inputNoAlcohol = document.getElementById("inputnoalcohol")


let resultMeat = document.getElementById("meatresult")
let resultBeer = document.getElementById("beerresult")
let resultSoda = document.getElementById("sodaresult")
let resultCoal = document.getElementById("coalresult")


function calculate(){

    let man = inputMan.value;
    let woman = inputWoman.value;
    let kids = inputKids.value;
    let time = inputTime.value;
    let noalcohol = inputNoAlcohol.value;

    let totalMeat = (meatPerMan(time) * man + (meatPerWoman(time) * woman) + (meatPerKid(time) * kids)) / 1000
    let totalBeer = (beerPerAdult(time) * man + (beerPerAdult(time) * woman)) - (noalcohol * 5)
    let totalSoda = (sodaPerAdult(time) * man + (sodaPerAdult(time) * woman) + (sodaPerKid(time) * kids)) + (noalcohol * 1.5)
    
    let totalTime = time
    let totalCoal = Math.ceil(totalMeat / 1.2)

    
    resultMeat.innerHTML = `<h2>${totalMeat} kg de carne</h2>`
    resultBeer.innerHTML = `<h2>${totalBeer} latas de cerveja</h2>`
    resultSoda.innerHTML = `<h2>${totalSoda} litros de refrigerante</h2>`
    resultCoal.innerHTML = `<h2>${totalCoal} Kg de carvão</h2>`
}

function reset(){



    resultMeat.innerHTML = ``
    resultBeer.innerHTML = ``
    resultSoda.innerHTML = ``
    resultCoal.innerHTML = ``
}

function meatPerMan(time){
    if(time >= 6){
        return 800;
    }else{
        return 400;
    }
}

function meatPerWoman(time){
    if(time >= 6){
        return 600;
    }else{
        return 300;
    }
}

function meatPerKid(time){
    if(time >= 6){
        return 400;
    }else{
        return 200;
    }
}

function beerPerAdult(time){
    if(time >= 6){
        return 10;
    }else{
        return 5;
    }
}


function sodaPerAdult(time){
    if(time >= 6){
        return 3;
    }else{
        return 1.5;
    }
}

function sodaPerKid(time){
    if(time >= 6){
        return 1.5;
    }else{
        return 0.750;
    }
}


