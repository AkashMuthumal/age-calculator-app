const calculateButton = document.querySelector(".js-calculate-button");
const birthDayInput = document.querySelector(".js-birthday");

calculateButton.addEventListener("click", ageCalculate);

function ageCalculate() {
    const birthDate = new Date(birthDayInput.value);
    const currentDate = new Date();

    if(birthDayInput.value === ""){
        emptyDate();
        return;
    }

    const totalMilis = currentDate.getTime() - birthDate.getTime();

    if(totalMilis < 0){
        invalidDate();
        return;
    }

    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30;
    const year = day * 365;

    let years = Math.floor(totalMilis / year);
    let months = Math.floor((totalMilis - years*year) / month);
    let days = Math.floor((totalMilis - years*year - months*month) / day)

    display(years, months, days);
}

function display(years, months, days){
    const displayElement = document.querySelector(".js-age-display");

    const displayHTML = `You are <span class="yello-color"> ${years} </span> years,
    <span class="yello-color"> ${months} </span> months and
    <span class="yello-color"> ${days} </span> days old`;

    displayElement.innerHTML = displayHTML;
}

function emptyDate(){
    const displayElement = document.querySelector(".js-age-display");

    const displayHTML = `Input a date !`;

    displayElement.innerHTML = displayHTML;
}

function invalidDate(){
    const displayElement = document.querySelector(".js-age-display");

    const displayHTML = `Date is not valid !`;

    displayElement.innerHTML = displayHTML;
}