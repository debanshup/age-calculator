export const calculateAge = (DOB) => {
    // console.log(DOB);
    
    const birthday = DOB
    const now = new Date();
    const birthDate = new Date(birthday);
    
    // Calculate year difference
    let years = now.getFullYear() - birthDate.getFullYear();
    
    // Adjust months and days
    let months = now.getMonth() - birthDate.getMonth();
    if (months < 0) {
      years--;
      months += 12;
    }
    
    let days = now.getDate() - birthDate.getDate();
    if (days < 0) {
      months--;
      const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += previousMonth.getDate();
    }
    
    let hours = now.getHours() - birthDate.getHours();
    if (hours < 0) {
      days--;
      hours += 24;
    }
    
    let minutes = now.getMinutes() - birthDate.getMinutes();
    if (minutes < 0) {
      hours--;
      minutes += 60;
    }
    
    let seconds = now.getSeconds() - birthDate.getSeconds();
    if (seconds < 0) {
      minutes--;
      seconds += 60;
    }
    
    let milliseconds = now.getMilliseconds() - birthDate.getMilliseconds();
    if (milliseconds < 0) {
      seconds--;
      milliseconds += 1000;
    }
    
    return [ years, months, days, hours, minutes, seconds, milliseconds]
    // return the result
    // return (`${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds, ${milliseconds} milliseconds`);
    
  
  }