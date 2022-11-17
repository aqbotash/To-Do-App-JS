quote = document.getElementById("motivation");

var formDetails = document.getElementById('expense_details_form');



formDetails.addEventListener('submit', handle_submit_form);
function handle_submit_form(event){
    event.preventDefault();
    expense_name = event.target.elements['name'].value;
    expense_amount = event.target.elements['amount'].value;
    mood_photo = event.target.elements['photo'].value;
    quoteGen = event.target.elements['day'].value;
    if(quoteGen=="monday" || quoteGen=="Monday"){
        quote.innerHTML = "All our dreams can come true, if we have the courage to pursue them.";
        quote.className = "quote";
    }
    else if(quoteGen=="tuesday" || quoteGen=="Tuesday"){
        quote.innerHTML = "Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.";
        quote.className = "quote";
    }
    else if(quoteGen=="wednesday" || quoteGen=="Wednesday"){
        quote.className = "quote";
        quote.innerHTML = "When you have a dream, you've got to grab it and never let go. — Carol Burnett";
    }
    else if(quoteGen=="thursday" || quoteGen=="Thursday"){
        quote.className = "quote";
        quote.innerHTML = "Nothing is impossible. The word itself says 'I'm possible! — Audrey Hepburn";
    }
    else if(quoteGen=="friday" || quoteGen=="Friday"){
        quote.className = "quote";
        quote.innerHTML = "The bad news is time flies. The good news is you're the pilot. — Michael Altshuler";
    }
    else if(quoteGen=="saturday" || quoteGen=="Saturday"){
        quote.className = "quote";
        quote.innerHTML = "Life has got all those twists and turns. You've got to hold on tight and off you go. — Nicole Kidman";
    }
    else if(quoteGen=="sunday" || quoteGen=="Sunday"){
        quote.className = "quote";
        quote.innerHTML = "Keep your face always toward the sunshine, and shadows will fall behind you. — Walt Whitman";
    }
    else{
        alert("error");
    }
    document.getElementById("mood").src = mood_photo;
    for(var i = 0; i< formDetails.length; i++){
        formDetails.elements[i].value ="";
    }

    var exCard = create_expense_card(expense_name, expense_amount);

    var money_container = document.getElementById('money_container');

    if(money_container.children.length===0){
        getElementById('title').innerHTML = "My expense list";
    }
    document.querySelector('#money_container').appendChild(exCard);
    
}
function create_expense_card(expense_name, expense_amount){

    var card = document.createElement('div');

    card.className = 'card';
    var cardTitle = document.createElement('h2');
    cardTitle.innerText = expense_name;
    card.appendChild(cardTitle);

    var expense = document.createElement('h2');
    expense.innerText = expense_amount;
    card.appendChild(expense);

    var deleteBtn = document.createElement("button");
    deleteBtn.innerText ="Remove";
    deleteBtn.addEventListener('click', deleteFunction);
    card.appendChild(deleteBtn);

return card;
}
function deleteFunction(event){
    var card = event.target.parentElement;
    card.remove();
}