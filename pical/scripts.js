let count = 0;
let pi = 0;
let sign = 1;

function calculatePi() {
    pi += 4 * sign / (2 * count + 1);
    sign *= -1;
    count++;

    document.getElementById("piDigits").textContent = pi.toFixed(10);
    document.getElementById("count").textContent = count;

    let filler = document.getElementById("filler");
    filler.style.width = (count % 100) + "%";  // Simple way to visualize progress
}

setInterval(calculatePi, 100);  // Generate faster for better visualization