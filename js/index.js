var quote = ["“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
"“You only live once, but if you do it right, once is enough.”",
  "“Be the change that you wish to see in the world.”",
  "“A friend is someone who knows all about you and still loves you.”",
  "“To live is the rarest thing in the world. Most people exist, that is all.”",
  "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
  "“It is our choices, Harry, that show what we truly are, far more than our abilities.”",
  "“Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect).”",
  "“I have not failed. I've just found 10,000 ways that won't work.”",
"“I may not have gone where I intended to go, but I think I have ended up where I needed to be.”"]

var heSaidIt = ["― Dr. Seuss",
"― Mae West",
"― Mahatma Gandhi",
"― Elbert Hubbard",
"― Oscar Wilde",
"― Ralph Waldo Emerson",
"― J.K. Rowling, Harry Potter and the Chamber of Secrets",
"― Mark Twain",
"― Thomas A. Edison",
"― douglas adams, The Long Dark Tea-Time of the Soul"];

function showQuote(){
  var ranNum = Math.floor(Math.random()* quote.length);
  var selectedQuote = quote[ranNum];
  var selecHeSaidIt = heSaidIt[ranNum];
  document.getElementById("quote").innerHTML=selectedQuote
  document.getElementById("heSaidIt").innerHTML=selecHeSaidIt
}
