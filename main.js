



function setDate(){
   const now = new Date();
   const seconds = now.getSeconds();
   const secondsDegrees = ((seconds / 60) * 360) + 90;
   const secondHand = document.querySelector('.second-hand');
   secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
   console.log(seconds);
}
/*facilitates in ensuirng that the clock is running every second*/
  setInterval(setDate, 1000);

  