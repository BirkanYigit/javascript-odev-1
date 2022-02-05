
/****************** User Input and UI Manipulation ******************/

// Reference to user name display element
let namePlaceholder = document.querySelector('#myName')

// Getting user name via prompt()
let userName = prompt('Lütfen isminizi giriniz: ')

// Checking if user name is valid
let isUserNameValid = userName.length !== 0

if ( isUserNameValid ) {
    // Inserting user name
    namePlaceholder.innerHTML = userName
} else {
    // To show placeholder name if user name is empty
    alert('İsim girmediniz, bu yüzden size İsimsiz Kullanıcı diyeceğiz.')
    namePlaceholder.innerHTML = 'İsimsiz Kullanıcı'
}


/****************** Date Creation and Formatting Logic ******************/

// Reference to timer element
const timerElement = document.querySelector('#myClock')

// Setting timer refresh rate (1000 = 1s)
const timerRefreshRate = 1000

// Setting timer
function showTime() {

    // Getting current time and day information
    const date = new Date()
    let [hour, minutes, seconds, dayName] = [date.getHours(), date.getMinutes(), date.getSeconds(), date.getUTCDay()];

    // Formatting time and day for better readability
    let currentTime = `
    ${formatDateValueToString(hour)}:${formatDateValueToString(minutes)}:${formatDateValueToString(seconds)} ${setDayName(dayName)}
    `
    timerElement.innerHTML = currentTime

    // Setting getUTCDay() function's return value to string according to day names
    function setDayName(dayName) {

        switch (dayName) {
            case 1:
                dayName = 'Pazartesi'
                return dayName
            case 2:
                dayName = 'Salı'
                return dayName
            case 3:
                dayName = 'Çarşamba'
                return dayName
            case 4:
                dayName = 'Perşembe'
                return dayName
            case 5:
                dayName = 'Cuma'
                return dayName
            case 6:
                dayName = 'Cumartesi'
                return dayName
            case 7:
                dayName = 'Pazar'
                return dayName
        }

    }

    // Making number output into two-char format for better representation
    function formatDateValueToString(dateValue) {
        dateValue = (dateValue < 10) ? '0'+dateValue.toString() : (dateValue >= 10) ? dateValue : dateValue
        return dateValue
    }

}

// Refreshing timer
setInterval(showTime, timerRefreshRate)
