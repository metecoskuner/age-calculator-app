document.querySelector(".calculate-btn").addEventListener("click", calculateAge);

function calculateAge() {
    
    const dayInput = document.getElementById("day");
    const monthInput = document.getElementById("month");
    const yearInput = document.getElementById("year");
    
   
    const day = parseInt(dayInput.value);
    const month = parseInt(monthInput.value);
    const year = parseInt(yearInput.value);
    
    
    if (!isValidDate(day, month, year)) {
        return; 
    }

    const today = new Date();
    const birthDate = new Date(year, month - 1, day); 

   
    let ageInYears = today.getFullYear() - birthDate.getFullYear();
    let ageInMonths = today.getMonth() - birthDate.getMonth();
    let ageInDays = today.getDate() - birthDate.getDate();

    
    if (ageInDays < 0) {
        ageInMonths--;
        ageInDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); 
    }

    if (ageInMonths < 0) {
        ageInYears--;
        ageInMonths += 12; 
    }

   
    document.getElementById("years").textContent = ageInYears;
    document.getElementById("months").textContent = ageInMonths;
    document.getElementById("days").textContent = ageInDays;
}

function isValidDate(day, month, year) {
   
    if (day < 1 || day > 31) {
        alert("Day must be between 1 and 31.");
        return false;
    }
    if (month < 1 || month > 12) {
        alert("Month must be between 1 and 12.");
        return false;
    }
    if (year < 1940) {
        alert("Year must be greater than or equal to 1940.");
        return false;
    }

    
    const monthDays = [31, (isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (day > monthDays[month - 1]) {
        alert(`The month ${month} does not have ${day} days.`);
        return false;
    }

    return true; 
}

function isLeapYear(year) {
   
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
