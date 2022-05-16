(function () {

    //Selection of the elements in the HTML that will be used in javascript
    const Counter = document.getElementById("BurgerCounter");
    const Button = document.getElementById("KrabbyPatty");
    const Multiply = document.getElementById("multiplier");

    //Variables that ...
    let ClickAmount = 0;
    let Clicks = 1;

    //Showing the current amount of clicks on the website
    Counter.innerHTML = ClickAmount;

    //Clicking function, on click increase amount in label by 1
    const ButtonClicks = () => {
        ClickAmount += Clicks ;
        Counter.innerHTML = ClickAmount;
    }
    Button.addEventListener("click", ButtonClicks);

    //Multiply Function, this will increase the click-amount by 2, but the user needs to pay 5 clicks to use it
    const Multipliedby2ButtonClicks = () => {
        //If the user has less than 5 clicks, the button will not work.
        if (ClickAmount >= 5) {
            ClickAmount -= 5;
            Counter.innerHTML = ClickAmount;
            Clicks *= 2;
        }
    }
    Multiply.addEventListener("click", Multipliedby2ButtonClicks);


})();