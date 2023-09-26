const endDate = "22 September 2023 03:44:40 PM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");

const clock = () => {
  const end = new Date(endDate)
  const now = new Date()
  const diff = (end - now) / 1000;

  if(diff < 0) return;

  // Convert into days
  inputs[0].value = Math.floor(diff / 3600 /24);
  // Convert into hours
  inputs[1].value = Math.floor(diff / 3600 % 24);
 // Convert into minutes
 inputs[2].value = Math.floor(diff / 60 )% 60;
 // Convert into seconds
 inputs[3].value = Math.floor(diff) % 60 ; 

}

clock();

setInterval( 
  () => {
    clock()

},1000)

// 1 day = 24 hrs
// 1 hour = 60 mins
// 60 min = 3600 sec

