# Krabby Patty Clicker
With the power of programming and childrens cartoons on my side, I have created a cookie clicker with my own fun little twist on it. </br>

#### [Click here to play the Krusty Krab Click Game](https://besartelezi.github.io/coockie-clicker/)

## Beginning
One of the toughest parts of the assignment, was getting started on it. I tried to split the assignment into little, *less intimidating* tasks.
I started working on it as follows:

* Git (gud)
  * Created a repository on github and added a .gitignore file, this project I actually used a .gitignore file for the first time.
  * Cloned that repository on my computer
  * Created all necessary files and folders
* HTML:
  * Create the base HTML template and adding all the basic HTML tags to get started
    * A button for the clicker
    * A label where you can see how many clicks are present
* Javascript: 
  * The variable amount of clicks on the button

#### I disregarded CSS for most of the beginning, because I believed I would be switching a lot of back and forth in the names of different HTML tags.

## The MMA of Coding (MCA if you will)
Starting out, I thought I would simply focus first on HTML, then Javascript, and then the CSS. But I just couldn't keep working like that. </br>

After I made the base HTML and Javascript for the clicker, I added the multiplier button, and afterwards I created the javascript code that would make the multiplier work.
Once I had one working button, I decided to start on the CSS for a bit. I made the website look as pretty and SpongeBob-by as possible. </br>

I learned a valuable lesson with the styling of the website. By giving buttons different ID's, but the same button class, I was able to give them the same look, while letting them have all different functions.
Creating a clear and good-looking structure is the one thing I learned from this assignment that I will value the most. </br>

I quickly realized that I had to mix up my way of working, constantly switching between different coding languages to achieve a result I can be proud of. And thus, I discovered the Mixed Coding Arts, a hidden skill of the coding world almost as valuable as googling. 

## Besart V.S. setInterval(), Battle Of The Ages
The biggest challenge for me, by far, is figuring out a way to use the setInterval function in order to add '1' click value every 10 seconds to the total amount of clicks value. </br>
I have yet to figure out a way to make this work, but I will keep you updated. <br>

## MATH, More Awesome Than Helicopterswithbazookasandlasers
The most fun I've had with this assignment, was creating original ways to make mathematical functions work. The best example I can give is the way I made the Multiplier button:

```
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
```


