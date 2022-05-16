(function () {

    //Selection of the elements in the HTML that will be used in javascript
    const Counter = document.getElementById("BurgerCounter");
    const Button = document.getElementById("KrabbyPatty");

    //The Variable of the amount of clicks on start, the value of each click and the value of the multiplier
    let ClickAmount = 0;
    let Clicks = 1;
    let ClickMultiplier = 2;

    //The different upgrades you can buy at the Krusty Krab
    let GoldenSpatula = 5;

    //Showing the current amount of clicks on the website
    Counter.innerHTML = ClickAmount;

    //Clicking function, on click increase amount in label by 1
    const ButtonClicks = () => {
        ClickAmount += Clicks ;
        Counter.innerHTML = ClickAmount;
    }
    Button.addEventListener("click", ButtonClicks);


    //variable of the button that will be used for the multiplier
    const Multiply = document.getElementById("multiplier");
    //Multiply Function, it starts at a cost of 5, but the cost will increase by 3 times on every purchase
    const Multipliedby2ButtonClicks = () => {
        //If the user has less than 5 clicks, the button will not work.
        if (ClickAmount >= GoldenSpatula) {
            ClickAmount -= GoldenSpatula;
            Counter.innerHTML = ClickAmount;
            Clicks *= ClickMultiplier;
            GoldenSpatula *= 3;
        }
    }
    Multiply.addEventListener("click", Multipliedby2ButtonClicks);



})();