(function () {
    //Selection of the elements in the HTML that will be used in javascript
    const Counter = document.getElementById("BurgerCounter");
    const Button = document.getElementById("KrabbyPatty");
    const GoldenSpatulaDescription = document.getElementById("MultiplyBtnDescription");
    const SpongebobDescription = document.getElementById("AutoClickerBtnDescription")
    const SquidwardDescription = document.getElementById("QuotesBtnDescription")

    //The Variable of the amount of clicks on start, the value of each click and the value of the multiplier
    let ClickAmount = 0;
    let Clicks = 1;
    let ClickMultiplier = 1;

    //The variable amount of clicks per 10 seconds
    let AutoClicksPer10sec = 1;

    //
    const CurrentMultiplier = document.getElementById("MultipyLabel");
    CurrentMultiplier.innerHTML = "1x Krabby Patty per click"
    //The different upgrades you can buy at the Krusty Krab
    let GoldenSpatula = 5;
    let Spongebob = 15;
    let Squidward = 300;
    let AmountofClicksPer10sec = 2;

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
                },5000);
            Spongebob *= 2
            //timerruning === true (boolean)
            //The Above code is still not working as intented
            let SpongebobCostShowIncreasedAmount = AmountofClicksPer10sec++
            SpongebobDescription.innerHTML = "Spongebob is here to help you, for " +Spongebob+ " Krabby Patties, you will get " + SpongebobCostShowIncreasedAmount + " Krabby Patties every 10 seconds.";
        }
    }
    AutoClicker.addEventListener("click", AutoClickerBtnClicks)


    //An array of quotes said by Squidward
    const Quotes = [
        "Hello. You've reached the house of unrecognized talent.",
        "Why is it whenever I'm having fun, it's wrong?",
        "It all started when I was born.",
        "Welcome to the House of Misery. May I take your order?",
        "I knew I shouldn't have gotten out of bed today",
        "It's just a cruel reminder that I'm single and likely to remain that way forever.",
        "Another day, another migraine",
        "Fortunately, I have enough talent for all of you.",
        "Welcome to the Krusty Krab, where it's almost as if the evolutionary clock ticks backwards.",
        "Is it time already for you to ruin my day?",
        "If I had a dollar for every brain you don't have, I'd have one dollar.",
        "Do you have barnacles for brains?",
        "Wake me up when I care.",
        "I can't believe anybody would celebrate a holiday where a jolly prowler breaks into your house and leaves gifts.",
        "I order the food, you cook the food, the customer gets the food. We do that for forty years and then we die.",
        "Please come again... when I'm not working",
        "Too bad SpongeBob is not here to enjoy SpongeBob not being here!",
        "Here, Please Hit Me As Hard As You Can.",
        "I Have No Soul.",
        "Too Bad That Didn't Kill Me.",
        "I Hate All Of You.",
        "Well, It Wouldn't Be The First Time You Ruined Everything.",
        "When I die, you stay away from my funeral.",
    ]

    //Setting the Squidward Button variable
    const SquidwardButton = document.getElementById("squidward");

    const ActivateSquidward = () => {
        if (ClickAmount >= Squidward) {
            ClickAmount -= Squidward;
            Counter.innerHTML = ClickAmount;
            //Selecting a random quote from the array of iconic Squidward quotes
            const RandomQuote = Quotes [Math.floor(Math.random() * Quotes.length)]
            //Adds a quote to the list in the HTML
            const EmptyListofQuotes = document.getElementById("QuotesList");
            const AddSquidwardQuote = document.createElement("li");
            AddSquidwardQuote.appendChild(document.createTextNode(RandomQuote));
            EmptyListofQuotes.appendChild(AddSquidwardQuote);
            //This removes the quote after 10 seconds from the list
            setTimeout( function (){
                EmptyListofQuotes.removeChild(EmptyListofQuotes.firstChild)
            },10000)
            Squidward *= 2;
            SquidwardDescription.innerHTML = "Squidward is here to \"help\" you out. For " +Squidward+ " Krabby Patties, he will give you a snarky comment.";
        }
    }
    SquidwardButton.addEventListener("click", ActivateSquidward)

    //Every 5 seconds, the title of the page changes to show the current amount of krabby patties
    setInterval(function (){
        document.title = ClickAmount + " Krabby Patties"
    }, 5000)
})();


