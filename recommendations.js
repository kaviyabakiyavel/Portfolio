

// Handle "Add New Recommendation" button click
document.getElementById("add-recommendation").addEventListener("click", function () {
    document.getElementById("recommendation-form").style.display = "block"
});


// Handle form submission
document.getElementById("recommendation-form").addEventListener("submit", function (event) {
    // Prevent page reload
    event.preventDefault();

    // Get the new recommendation text
    const newRecommendation = document.getElementById("new-recommendation").value;

    // Add the new recommendation to the list
    const recommendationList = document.getElementById("recommendations-list");
    const newListItem = document.createElement("li");
    newListItem.textContent = newRecommendation;
    recommendationList.appendChild(newListItem);

    // Clear the form
    document.getElementById("new-recommendation").value = "";
    document.getElementById("recommendation-form").style.display = "none";

    // Show the confirmation modal
    const modal = document.getElementById("confirmation-modal");
    modal.style.display = "block";

    // Close the modal when the close button is clicked
    document.getElementById("close-modal").addEventListener("click", function () {
        modal.style.display = "none";
    });
});