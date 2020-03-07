//Welcom Message
var user = 'Bill';
var salutation ='Hello ';
var greeting = salutation + user + '! This is a Asus laptop review.';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

//product price
var price = 2383.39,
    amazonVisaDiscount = 60,
    amazonVisaPrice = price - amazonVisaDiscount,
    priceEl = document.getElementById('price'),
    amazonVisaEl = document.getElementById('amazon-visa');
    
    priceEl.textContent = price.toFixed(2);
    amazonVisaEl.textContent = amazonVisaPrice.toFixed(2);

