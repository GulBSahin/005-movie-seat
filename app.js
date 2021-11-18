const picked=document.getElementById("movie");
const seats=document.querySelector(".container");
const count=document.getElementById("count"); //will print value 
const film=document.getElementById("film"); //will print value
const total=document.getElementById("total"); //will print value
const movie=document.getElementById("movie");

console.log(movie.value);
console.log(movie.selectedIndex);

function selectedCount(){
        seatCount = seats.getElementsByClassName("occupied").length; //length the completed tasks
        count.innerHTML=seatCount; //send the value to html p element
        console.log(seatCount);
        var moviePay = movie.options[movie.selectedIndex].value;
        console.log(moviePay);
        var movieName = movie.options[movie.selectedIndex].innerHTML;
        console.log(movieName);
        film.innerHTML=movieName;
        console.log(moviePay);
        total.innerHTML=parseFloat(moviePay*seatCount);
    }
movie.onchange=selectedCount;   
selectedCount();
//Events
seats.addEventListener("click", e=>{  
    e.preventDefault();
    if(e.target.classList.contains("seat")) { 
                e.target.classList.add("occupied");
            }else {
                e.target.classList.remove("occupied"); 
            } 
            selectedCount()
    })