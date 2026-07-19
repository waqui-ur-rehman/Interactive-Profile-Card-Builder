var formatGreeting=(name,role)=>{
    return `Hello, my name is ${name} and I am a ${role}!`;
};



var card1Count = 0;
var card2Count = 0;
var card3Count = 0;
var buttons = document.getElementsByClassName("greetme");






for (var i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", function () {
        var card = this.parentElement;

        var name = card.getElementsByClassName("name")[0].innerText;
        var role = card.getElementsByClassName("role")[0].innerText;
        var greeting = card.getElementsByClassName("greetings")[0];

        var counter = card.getElementsByClassName("clickcounter")[0];

        greeting.innerHTML = formatGreeting(name, role);
        if (card.id == "card1") 
{
            card1Count++;
            counter.innerText = `Clicked ${card1Count} times`;
        }

        if (card.id == "card2") {
            card2Count++;
            counter.innerText = `Clicked ${card2Count} times`;
        }

        if (card.id == "card3") {
            card3Count++;
            counter.innerText = `Clicked ${card3Count} times`;
        }

    });

}