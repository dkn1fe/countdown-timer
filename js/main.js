
const deadline = '2024-01-01';

function getFullTimes(endtime){
    const t = new Date(endtime) - new Date();
    const days = Math.floor((t / (1000 * 60 * 60 * 24)));
    const hours = Math.floor((t / (1000 * 60 * 60) % 24));
    const minutes = Math.floor((t / (1000 / 60)) % 60);
    const seconds = Math.floor((t / 1000) % 60);

    return {
        total : t,
        days  : days,
        hours : hours,
        minutes : minutes,
        seconds : seconds
    }
}

function getZero(num){
    if(num >= 0 && num < 10){
        return `0${num}`;
    }
    else if(num < 0){
        return '00';
    }
    else {
        return num;
    }
}

function SetClock(endtime){
   const timer = document.querySelector('.timer');
   const days = document.querySelector('#days');
   const hours = document.querySelector('#hours');
   const minutes = document.querySelector('#minutes');
   const seconds = document.querySelector('#seconds');
   let timeInterval = setInterval(updateClock, 1000);
 
updateClock()

  function updateClock(){
    const t = getFullTimes(endtime);
    days.innerHTML = getZero(t.days);
    hours.innerHTML =getZero(t.hours);
    minutes.innerHTML =getZero(t.minutes);
    seconds.innerHTML = getZero(t.seconds);
   
    if(t.total <= 0){
        clearInterval(timeInterval);
    }
}
}

SetClock(deadline);
