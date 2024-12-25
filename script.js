// Check if the date is Christmas Day 2024
function goToGreeting() {
    document.getElementById("prompt").style.display = "none"; // Hide the prompt
    document.getElementById("message").style.display = "block"; // Show the message
    document.getElementById("greeting").style.fontFamily = "Mountains of Christmas, cursive"; // Apply custom font;
    document.getElementById("greeting").style.fontSize = "2.5rem"; // Set font size for the greeting
    document.getElementById("greeting").style.color = "red"; // Set text color to red
}

// Function to create falling snowflakes
function createSnowflakes() {
    const numberOfSnowflakes = 50;
    for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflake = document.createElement("div");
        snowflake.classList.add("circle");
        
        // Randomize the position of the snowflakes horizontally
        snowflake.style.left = Math.random() * window.innerWidth + "px";
        snowflake.style.animationDelay = Math.random() * 10 + "s";
        
        document.body.appendChild(snowflake);
    }
}

// Optional: Make sure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
    // Any DOM manipulations can go here
});

// Call the function to create snowflakes when the page loads
window.onload = function() {
    createSnowflakes();
};
