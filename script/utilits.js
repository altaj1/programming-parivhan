function setElementValueByID (ID, value){
    document.getElementById(ID).innerText = value;
}
function getElementValueTextById(id){
    const elementValue = document.getElementById(id).innerText;
    return elementValue;
}
function createElement (tag){
    const p = document.createElement("p");
    
    const div = getElement("select-set")
    
  const appent =   div.appendChild(p)
  return appent

    
}
function getElement (id){
   return document.getElementById(id)
}
