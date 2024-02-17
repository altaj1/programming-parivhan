const seats = document.getElementsByClassName("per-set");
let seatCount = 0;
let seatLeft = 0;
for(const seat of seats){
    seat.addEventListener("click", (event)=>{
        event.target.style.backgroundColor = "yellow";
    

        seatCount +=1;
       if(seatCount <=4 ){
        seatLeft += 1;
        setElementValueByID("seat-number", seatCount);
      const totalSeat = getElementValueTextById("total-seat");
      const bukingSeat = parseInt(totalSeat) - seatLeft;
      seatLeft = 0;
      setElementValueByID("total-seat", bukingSeat);
      const ticketPrice = getElementValueTextById("per-seat-price");
      const elementText = event.target.innerText
      const conCatTicClsPric = elementText + ' '+" "+ "Economoy" + '   ' + ticketPrice;
      createElement("p").innerText = conCatTicClsPric 
         
       }
       else{
        alert("you cannot buy ticaket")
       }
    
    })
}