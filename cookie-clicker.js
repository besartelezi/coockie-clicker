(function () {

    //Selection of the elements in the HTML that will be used in javascript
    const Counter = document.getElementById("PunchCounter");
    const Button = document.getElementById("DioBrando");
    const Multiply = document.getElementById("multiplier");

    //Variables that ...
    let ClickAmount = 0;
    let Clicks = 1;
    let Multiplier = 2;

    //Showing the current amount of clicks on the website
    Counter.innerHTML = ClickAmount;

    //Clicking function, on click increase amount in label by 1
    const ButtonClicks = () => {
        ClickAmount += Clicks ;
        Counter.innerHTML = ClickAmount;
    }
    Button.addEventListener("click", ButtonClicks);

    //Multiply Function, this will increase the click-amount by 2
    const Multipliedby2ButtonClicks = () => {
        if (ClickAmount >= 5) {
            ClickAmount -= 5;
            Counter.innerHTML = ClickAmount;
            Clicks *= Multiplier;
        }
        if (ClickAmount < 5) {
        }
    }
    Multiply.addEventListener("click", Multipliedby2ButtonClicks);


})();