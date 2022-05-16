(function () {

    //Selecting and naming the variables that are used in the HTML, while also adding the variable amount of clicks
    const Counter = document.getElementById("PunchCounter");
    const Button = document.getElementById("DioBrando");
    let ClickAmount = 0;
    Counter.innerHTML = ClickAmount;

    //Some badabing badaboom
    const ButtonClicks = () => {
        ClickAmount++;
        Counter.innerHTML = ClickAmount
    }
    Button.addEventListener("click", ButtonClicks)

})();