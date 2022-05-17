(function () {
    //Selection of the elements in the HTML that will be used in javascript
    const Counter = document.getElementById("BurgerCounter");
    const Button = document.getElementById("KrabbyPatty");
    const GoldenSpatulaDescription = document.getElementById("MultiplyBtnDescription");
    const SpongebobDescription = document.getElementById("AutoClickerBtnDescription")


    //The Variable of the amount of clicks on start, the value of each click and the value of the multiplier
    let ClickAmount = 0;
    let Clicks = 1;
    let ClickMultiplier = 1;

    //The variable amount of clicks per 10 seconds and the variable used to multiply this amount with per purchase
    let AutoClicksPer10sec = 1;

    //
    const CurrentMultiplier = document.getElementById("MultipyLabel");
    CurrentMultiplier.innerHTML = "1x Krabby Patty per click"
    //The different upgrades you can buy at the Krusty Krab
    let GoldenSpatula = 5;
    let Spongebob = 15;

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
    //Multiply Function, it starts at a cost of 5, but the cost will increase by 3 times on every purchase. Every time the button is used it increases the amount of the multiplier by +1
    const MultipliedbyxButtonClicks = () => {
        //If the user has less clicks than the needed amount to purchase the Golden Spatula, the button will not work.
        if (ClickAmount >= GoldenSpatula) {
            ClickAmount -= GoldenSpatula;
            Counter.innerHTML = ClickAmount;
            //In order for this to keep growing exponentially, I started off by dividing the current clicks by the current multiplier, THEN letting the multiplier grow by '1', THEN using the multiplier on the Clicks.
            Clicks /= ClickMultiplier;
            ClickMultiplier++;
            Clicks *= ClickMultiplier;
            //This increases the next purchase of the Golden Spatula
            GoldenSpatula *= 3;
            //Created a new variable that adds 1 to the current multiplier, this shows the current multiplier the player can get when purchasing the golden spatula
            let ShowMultiplier = ClickMultiplier + 1;
            GoldenSpatulaDescription.innerHTML = "Using the Golden Spatula costs " +GoldenSpatula+ " Krabby Patties, but it will let you make " + ShowMultiplier + "x as many Krabby Patties!";
            //Show the current active multiplier
            CurrentMultiplier.innerHTML = ClickMultiplier+ "x Krabby Patty per click";
        }
    }
    Multiply.addEventListener("click", MultipliedbyxButtonClicks);

    //variable of the button that will be used for the autoclicker
    const AutoClicker = document.getElementById("autoclicker");
    //AutoClicker function, the purchasing of said button has been coded the same way as the previous button
    const AutoClickerBtnClicks = () => {
        if (ClickAmount >= Spongebob) {
            ClickAmount -= Spongebob;
            Counter.innerHTML = ClickAmount;
            // Only turn this on when the below code has been fixed AutoClicksPer10sec++
            //every 10 seconds, a value of '1' will be added to the total click amount, and the cost of the spongebob button will be doubled
            setInterval(function (){
              ClickAmount += AutoClicksPer10sec;
              Counter.innerHTML = ClickAmount;
            },10000);
            Spongebob *= 2
            //timerruning === true (boolean)
            //The Above code is still not working as intented
            let SpongeBobCostShow = AutoClicksPer10sec++ +1
            SpongebobDescription.innerHTML = "Spongebob is here to help you, for " +Spongebob+ " Krabby Patties, you will get " + SpongeBobCostShow + " Krabby Patties every 10 seconds.";
        }
    }
    AutoClicker.addEventListener("click", AutoClickerBtnClicks)

})();


