/*show/hide folders and cobra */

function showDiv(){
    document.getElementById('aboutMe').style.display = "block";
    typewriter();
}        
   
      
        
function showCont(){
    document.getElementById("contact").style.display = "block";
}           
  

function showProj(){
    document.getElementById('myProjects').style.display = "block";
}           


function myFunction() {
    var x = document.getElementById("game");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
} 


function shutDown(){
    document.getElementById('shutDownPage').style.display = "block";
} 





/* TYPEWRITER */
        
// set up text to print, each item in array is new line
var aText = new Array(
">  Cześć,", 
">nazywam się <span id=\"name\">Dawid Bator</span>",
">w tym roku ukończyłem studia pierwszego stopnia z Informatyki Stosowanej.",
">Obecnie szukam pracy lub stażu jako...",
">Junior frontend deweloper lub Junior webdeweloper",
" ",
">Mieszkam w Starym Sączu (małe miasteczko obok Nowego Sącza). Jestem otwarty na pracę w większych miastach.",
">Oglądam mnóstwo filmów i seriali. Lubię pograć w gierki, czasem za dużo.",
">Staram się zostać programistą, który wie co robi. Niestety aktualnie jestem tylko dobrym operatorem wyszukiwarki google\'a.",
" ",    
"\">Not sure if i\'m a good junior programmer",
"or just good at googling\"",
" ",
">Całe moje zainteresowanie tworzeniem stron, zaczęło się końcem drugiego roku na studiach. Przez profesora który mi to najpierw dobrze obrzydził. Z czasem tworząc kolejne projekty na zaliczenie pokochałem to i zrozumiałem, że to nie tylko kodowanie, ale w jakimś sensie sztuka.", 
">Na 3 roku udało mi się rozpocząć staż w firmie która zajmowała się tworzeniem stron i portali internetowych. Mogłem zobaczyć jak wygląda to wszystko od środka. Bardzo się cieszyłem, gdy starsi koledzy dali mi możliwość zakodowania moich pierwszych stron. Poczułem się jak dziecko w sklepie z zabawkami.",
">Zatrudnij Batorka na juniorka z głową pełną pomysłów! :)"
);
var iSpeed = 30; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
 
function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("content");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}





/*CZAS I DATA*/
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 
    m = checkTime(m);

    document.getElementById('clock').innerHTML = 
        h + ':' + m +'</br>'+ yyyy+'-'+mm+'-'+dd; ;
    var t = setTimeout(startTime, 500);
    
}        
        
function checkTime(i) {
    if (i < 10) {i = "0" +i}; //daje zero do liczb <10
    return i;
} 

    




















