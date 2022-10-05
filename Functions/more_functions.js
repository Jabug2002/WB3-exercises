function displayingMailingLabel(name, address, city, state, zip){
    console.log(name)
    console.log(address)
    console.log(city+", "+ state+" "+zip)

}
 function addNumbers(num1, num2){
    let result=num1+num2
    console.log(num1+" + "+num2+" = "+result)

 }
 function displayReceipt(totalDue, amountPaid){
    let result=totalDue-amountPaid
    console.log("Total Due: $"+totalDue)
    console.log("Amount Paid: $"+amountPaid)
    console.log("Change Due: $"+result)
}
displayingMailingLabel("Jaden", "1237 5th Ave", "Hampton", "Georgia", "30228")
addNumbers(6,7)
displayReceipt(12.47,20)