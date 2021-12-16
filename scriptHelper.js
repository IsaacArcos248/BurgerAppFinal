function validateInput(testInput){
    let numberInput = Number(testInput);
    if(testInput === ""){
        return "Empty";
    } else if(isNaN(numberInput)) {
        return "Not a Number";
    }else if(isNaN(numberInput) === false){
        return "Is a Number";
    }
}

function formSubmission(document, list,burger,drink, timeFriesSatLevel,iceCreamReqStatusLevel){
    let burgerStatus = document.getElementById("burgerStatus");
    let drinkStatus = document.getElementById("drinkStatus");
    let timeFriesSat = document.getElementById("timeFriesSatStatus");
    let iceCreamReq = document.getElementById("iceCreamReqStatus");

    if(validateInput(burger) === "Empty" ||validateInput(drink) === "Empty" ||validateInput(timeFriesSatLevel) === "Empty" || validateInput(iceCreamReqStatusLevel) === "Empty" ) {
        window.alert("All fields are required!!")
    } else if(validateInput(burger) === "Is a Number" || validateInput(drink) ==="Is a Number" || validateInput(timeFriesSatLevel) === "Not a Number" || validateInput(iceCreamReqStatusLevel) === "Not a Number"){
        window.alert("Make sure you enter valid info for all fields!!!")
    } else {
        list.style.visibility = "visible";
        burgerStatus.innerHTML = `Burger ${burger} is ready for Customer!`
        drinkStatus.innerHTML = `Drink ${drink} is ready for Customer!`
        if(timeFriesSatLevel < 5 && iceCreamReqStatusLevel > 3 ){
            timeFriesSat.innerHTML = " Those fries are too Hot!";
            iceCreamReq.innerHTML = 'Frosty Machine broke';
            lunchStatus.innerHTML = "Lunch is not ready!";
            lunchStatus.style.color = "#C7254E";
        } else if ((timeFriesSatLevel >= 6 && timeFriesSatLevel < 10) &&  iceCreamReqStatusLevel > 3){
            timeFriesSat.innerHTML = "Those fries are perfect!";
            iceCreamReq.innerHTML = 'Frosty Machine broke';
            lunchStatus.innerHTML = "Lunch is not ready!";
            lunchStatus.style.color = "#C7254E";
        } else if(timeFriesSatLevel > 10 && iceCreamReqStatusLevel < 3){
            timeFriesSat.innerHTML = " Those fries have been sitting too long! Drop a fresh batch!";
            iceCreamReq.innerHTML = 'Frosty is perfect';
            lunchStatus.innerHTML = "Lunch is not ready!";
            lunchStatus.style.color = "#C7254E";
        } else {
            timeFriesSat.innerHTML = "Fries are perfect";
            iceCreamReq.innerHTML = 'Frosty is perfect';
            lunchStatus.innerHTML = "Lunch is ready!";
            lunchStatus.style.color = "#419F6A";
        }
    }

}
