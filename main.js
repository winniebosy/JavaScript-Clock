



function setDate(){
   const now = new Date();

   /*gets the clocks seconds hand */
   const seconds = now.getSeconds();
   const secondsDegrees = ((seconds / 60) * 360) + 90;
   const secondHand = document.querySelector('.second-hand');
   secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    

   /*gets the clocks minute hand */
   const minutes =now.getMinutes();
   const minutesDegrees = ((minutes / 60) * 360) + 90;
   const minutesHand = document.querySelector('.min-hand');
   minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

  /*gets the clocks hour hand */
   const hour = now.getMinutes();
   const hourDegrees = ((minutes/ 12) * 360) + 90;
   const hourHand = document.querySelector('.hour-hand');
   hourHand.style.transform = `rotate(${hourDegrees}deg)`;
   
}
/*facilitates in ensuirng that the clock is running every second*/
  setInterval(setDate, 1000);

  