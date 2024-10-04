// script.js

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active'); // Toggle sidebar visibility

    // Adjust main content based on sidebar state
    const mainContent = document.querySelector('main');
    if (sidebar.classList.contains('active')) {
        mainContent.style.width = 'calc(100% - 250px)'; // Reduce width for sidebar
    } else {
        mainContent.style.width = '100%'; // Full width when sidebar is hidden
    }
}




document.getElementById('prediction-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent page refresh on form submit

    // Get the input data from the form
    const inputData = document.getElementById('inputData').value;

    try {
        // Make the API call to get the prediction
        const response = await fetch('http://your-api-url.com/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                data: inputData,  // The data being sent to the API
            }),
        });

        // Check if the response is OK
        if (!response.ok) {
            throw new Error('Error in API call');
        }

        // Parse the response JSON
        const result = await response.json();

        // Display the result on the webpage
        document.getElementById('prediction-result').innerText = `Prediction: ${result.prediction}`;

    } catch (error) {
        console.error('Error:', error);
        document.getElementById('prediction-result').innerText = 'Error in fetching prediction';
    }
});


// Example of updating the prediction result dynamically
function displayPredictionResult(result) {
    const predictionBox = document.getElementById('prediction-result');
    predictionBox.innerHTML = `<p>${result}</p>`;
    predictionBox.style.display = 'block'; // Show the result box when there's a result
}


// Example usage
displayPredictionResult('The predicted network performance is 85% accuracy.');
