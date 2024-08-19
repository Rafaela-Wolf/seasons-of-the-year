const btn = document.getElementById("input-btn");
const text = document.getElementById("text");

function checkMonth() {
    const monthInput = prompt('Enter the month:');
    const month = monthInput.trim().toLowerCase();

    const validMonths = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

    if (!validMonths.includes(month)) {
        alert('Enter a valid value!');
    } else {
        const formattedMonth = month.charAt(0).toUpperCase() + month.slice(1);
        if (month === "january" || month === "february" || month === "march") {
            text.textContent = `${formattedMonth} is WINTER.`;
        } else if (month === "april" || month === "may" || month === "june") {
            text.textContent = `${formattedMonth} is SPRING.`;
        } else if (month === "july" || month === "august" || month === "september") {
            text.textContent = `${formattedMonth} is SUMMER.`;
        } else if (month === "october" || month === "november" || month === "december") {
            text.textContent = `${formattedMonth} is WINTER.`;
        }
    }
}

btn.addEventListener("click", checkMonth);