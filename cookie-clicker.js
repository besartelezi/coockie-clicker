(function () {


    let ClickCounter = [0];
    const ClickLabel = document.getElementById("oras");
    ClickLabel.innerHTML = ClickCounter


    const Clicker = document.getElementById("DioBrando").addEventListener("click", ButtonClick);
    function ButtonClick () {
        ClickCounter.value + 1;
    }



})();