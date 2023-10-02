import {getSites} from "./PlanetService.js";


let cardData = {};



// Add event listeners for page
document.addEventListener('DOMContentLoaded', () => {
    // Save button will be in Trip Package Card
    // document.getElementById('add_btn').addEventListener('click', addPackage);
    // document.getElementById('delete_btn').addEventListener('click', removePackage);
    // document.getElementById('summary_btn').addEventListener('click', generateTripSummary);
    // document.getElementById('view-itin-btn').addEventListener('click', displayItinerary);

    
    populateCarouselImage();
})


async function populateCarouselImage() {
    const sites = await getSites();
    console.log(sites);
    
}


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