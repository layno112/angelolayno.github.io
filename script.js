document.addEventListener("DOMContentLoaded", (event) => {
    // Get the popup
    const popup = document.getElementById("popup");

    // Get the button that opens the popup
    const btn = document.getElementById("home_btn");

    // Get the <span> element that closes the popup
    const closeBtn = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the popup
    btn.addEventListener("click", () => {
        popup.style.display = "block";
    });

    // When the user clicks on <span> (x), close the popup
    closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
    });

    // When the user clicks anywhere outside of the popup, close it
    window.addEventListener("click", (event) => {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    });

    // Get all like buttons
    const likeBtns = document.querySelectorAll(".likeBtn");
    // Add click event listener to each button
    likeBtns.forEach(button => {
        button.addEventListener("click", () => {
            // Find the next sibling element that is a span
            const likeCountSpan = button.nextElementSibling;
            // Get current like count from the span's text content
            let likeCount = parseInt(likeCountSpan.textContent.split(" ")[0]);
            // Increment the count
            likeCount++;
            // Update the span's text content with the new like count
            likeCountSpan.textContent = `${likeCount} likes`;
        });
    });

});