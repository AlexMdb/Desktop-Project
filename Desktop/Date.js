function getDate(){
    const currentDate = new Date();

    // Gets the day of the week, the month, and the day of the month 
    const dayOfWeek = getDayOfWeek(currentDate.getDay());
    const Month = getMonth(currentDate.getMonth());
    const dayOfMonth = addLeadingZero(currentDate.getDate());

    const formattedDate = `${dayOfWeek}, ${Month} ${dayOfMonth}`;

    // Finds the element in the html with the Id 'Date' and changes the content of it to the formatted date
    document.getElementById('Date').textContent = formattedDate;
} 

function getDayOfWeek(dayIndex){
    // Array with the days of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfWeek[dayIndex];
}

function getMonth(monthIndex){
    // Array with the months of the year
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[monthIndex]
}

function addLeadingZero(number){
    // Adds a zero if the number is less than 10
    return (number < 10) ? `0${number}` : number;
}

getDate();