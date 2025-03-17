function hello() {
    var a = prompt("enter a number (1-7) for the day of the week")
    switch (a) {
        case "1": document.getElementById("puneeth").innerHTML = "Monday";
            break;
        case "2": document.getElementById("puneeth").innerHTML = "Tuesday";
            break;
        case "3": document.getElementById("puneeth").innerHTML = "Wednesday";
            break;
        case "4": document.getElementById("puneeth").innerHTML = "Thursday";
            break;
        case "5": document.getElementById("puneeth").innerHTML = "Friday";
            break;
        case "6": document.getElementById("puneeth").innerHTML = "Saturday";
            break;
        case "7": document.getElementById("puneeth").innerHTML = "Sunday";
            break;
        default: alert("enter correct number");

    }
}
