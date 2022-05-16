(function () {

    //Selecting and naming the variables that are used in the HTML, while also adding the starting variable for the amount of clicks
    const Counter = document.getElementById("PunchCounter");
    const Button = document.getElementById("DioBrando");
    let ClickAmount = 0;
    Counter.innerHTML = ClickAmount;
    let Clicks = 1;
    let Multiplier = 2;


    //Clicking function, on click increase amount in label by 1
    const ButtonClicks = () => {
        ClickAmount += Clicks ;
        Counter.innerHTML = ClickAmount;
    }
    Button.addEventListener("click", ButtonClicks);

    const Multiply2Button = document.getElementById("multiplier");

    const Multipliedby2ButtonClicks = () => {
        Clicks *= Multiplier;
    }
    Multiply2Button.addEventListener("click", Multipliedby2ButtonClicks);




})();