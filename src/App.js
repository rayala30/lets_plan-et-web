const API_BASE = 'http://localhost:8080/api/cruises';

// Use this API to fetch info on offered packages?
const RAILWAY_API_BASE = "https://letsplan-et-server-production.up.railway.app/api/v1/cruises"

let cardData = {};



// Add event listeners for page
document.addEventListener('DOMContentLoaded', () => {
    // Save button will be in Trip Package Card
    document.getElementById('add_btn').addEventListener('click', addPackage);
    document.getElementById('delete_btn').addEventListener('click', removePackage);
    document.getElementById('summary_btn').addEventListener('click', generateTripSummary);
    document.getElementById('view-itin-btn').addEventListener('click', displayItinerary);

})


function addPackage() {

}


function removePackage() {

}

function displayItinerary() {

}


function generateTripSummary() {

}


function calculateTotalTripTime() {

}