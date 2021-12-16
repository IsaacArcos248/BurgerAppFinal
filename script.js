window.addEventListener("load",function(){

    let list = document.getElementById("faultyItems");
    list.style.visibility = "hidden";
    let form = document.querySelector("form");

    form.addEventListener("submit",function(event){
        event.preventDefault();

        let burgerInput = document.querySelector("input[name=burgerName]");
        let burger = burgerInput.value;

        let drinkInput = document.querySelector("input[name=drinkName]");
        let drink = drinkInput.value;
 
        let timeFriesSatInput = document.querySelector("input[name=timeFriesSat]");
        let timeFriesSatLevel = Number(timeFriesSatInput.value);
 
        let iceCreamReqStatusInput = document.querySelector("input[name=iceCreamReq]");
        let iceCreamReqStatusLevel = Number(iceCreamReqStatusInput.value);

        formSubmission(document, list,burger,drink, timeFriesSatLevel,iceCreamReqStatusLevel);        

    });
});