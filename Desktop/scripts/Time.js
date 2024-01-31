function getTime(){
    const currentTime = new Date();

    // Gets the Hours, Minutes, and Seconds
    const Hours = addLeadingZero(currentTime.getHours());
    const Minutes = addLeadingZero(currentTime.getMinutes());
    const Seconds = addLeadingZero(currentTime.getSeconds());

    //const formattedTime = `${Hours}:${Minutes}:${Seconds}`;

    // Formats the time into a 12 Hours format (Bassically this: 12:00)
    let formattedTime = `${Hours}:${Minutes}`;

    // Finds an element in the html, with the Id 'Time', and changes it's contents into the formatted time.
    document.getElementById('Time').textContent = formattedTime;
}

function addLeadingZero(number){
    // Adds a zero in front of the number if it is lesser than 10
    return (number < 10) ? `0${number}` : number;
}

// Waits 0.9 seconds before atualizing the clock
setInterval(getTime, 900);

getTime(); 