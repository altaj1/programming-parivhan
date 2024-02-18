document.addEventListener('DOMContentLoaded', function() {
    const navigateBtn = getElement('navigate-btn');
    const productSection =getElement('product-section');
    navigateBtn.addEventListener('click', function() {
      productSection.scrollIntoView({ behavior: 'smooth' });
    });
  });

const seats = document.getElementsByClassName("per-set");
let seatCount = 0;
let seatLeft = 0;

for(const seat of seats){
    seat.addEventListener("click", function mainFun (event){
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
      createElement("p").innerText = conCatTicClsPric;
      const totalPrice = getElementValueTextById("total-price");
      const totalResult = parseInt(ticketPrice) + parseInt(totalPrice);
      setElementValueByID("total-price", totalResult);
      setElementValueByID("grand-total", totalResult);
      
       if(seatCount == 1){
        getElement("apply-button").disabled = false;
         getElement("apply-button").addEventListener("click", ()=>{
         const inputField =  getElement("input-fild").value; 
         const validation = inputField.split(' ').join('').toUpperCase();
         const validation1 = inputField.split('')[0].toUpperCase();
        const validation2 =  inputField.substring(1, inputField.length).toLowerCase();
        const cuppolValidation = validation1 + validation2;
        const cuppolValidation2 =  cuppolValidation.split(' ').join("");
        console.log(cuppolValidation2)
         if(validation == "NEW15"){
            const discunt15 = parseInt(getElementValueTextById("total-price")) * 0.15;
            console.log(discunt15)
            const grandtotal = parseInt(getElementValueTextById("grand-total")) - discunt15;
            setElementValueByID("grand-total", grandtotal)
         }
         else if (cuppolValidation2 == "Couple20"){
            const discunt15 = parseInt(getElementValueTextById("total-price")) * 0.2;
            console.log(discunt15)
            const grandtotal = parseInt(getElementValueTextById("grand-total")) - discunt15;
            setElementValueByID("grand-total", grandtotal)
         }
         else{
            alert("Please enter valid coupon code!")
         }
         getElement("cuppon-hedden").classList.add("hidden")
         })
       }
    }
    else{
        alert("You cannot buy more ticket!")       
    }
    // modal
const inputField = getElement("input-phone");
inputField.addEventListener("change", (event)=>{
   const inpVal =  parseInt(event.target.value);
   console.log(inpVal)
    // console.log(isNaN(inputField))
    if(seatCount > 0 && typeof inpVal == "number"  && isNaN(inputField)){
        getElement("purces-button").disabled = false;
        getElement("purces-button").addEventListener("click", ()=>{
            const modatBtn = getElement("modat-btn");
            modatBtn.click();
            getElementValueTextById("grand-total") = ""
        })
    }
   });
   // modat function last
   seat.removeEventListener("click", mainFun )
        })
}


function returnToMainPage() {
    window.location.href = "index.html"; 
  }
