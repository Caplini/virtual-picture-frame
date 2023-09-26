let count = 0;
let pi = 4;  // start with first term of the series
let sign = -1;

function calculatePi() {
    pi += sign * (4 / (1 + count * 2));
    sign *= -1;
    count++;

    document.getElementById("piDigits").textContent = pi.toFixed(10);
    document.getElementById("count").textContent = count;

    let filler = document.getElementById("filler");
    filler.style.width = (count % 100) + "%"; // Simple way to visualize progress
}

setInterval(calculatePi, 100); // Generate faster for better visualization
