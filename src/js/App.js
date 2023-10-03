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

    sites.forEach((eachSite, index) => {

        const name = eachSite.site;
        const image = eachSite.imgUrl;
        const planet = eachSite.site_planet;
        const fact = eachSite.site_fact;

        const carouselParent = document.createElement('div');
        carouselParent.setAttribute('class', 'carousel-item c-item');

        const carouselImg = document.createElement('img');
        carouselImg.setAttribute('src', image);
        carouselImg.setAttribute('class', 'd-block w-100 c-img');

        const carouselCaptionParent = document.createElement('div');
        carouselCaptionParent.setAttribute('class', 'carousel-caption d-none d-md-block');

        const carouselName = document.createElement('h5');
        carouselName.innerText = name;

        const carouselPlanet = document.createElement('h4');
        carouselPlanet.innerText = planet;

        const carouselFact = document.createElement('p');
        carouselFact.innerText = fact;


        carouselParent.insertAdjacentElement('beforeend', carouselImg);
        carouselParent.insertAdjacentElement('beforeend', carouselCaptionParent);

        carouselCaptionParent.insertAdjacentElement('beforeend', carouselName);
        carouselCaptionParent.insertAdjacentElement('beforeend', carouselPlanet);
        carouselCaptionParent.insertAdjacentElement('beforeend', carouselFact);

        document.querySelector('div.carousel-inner')
                .insertAdjacentElement('beforeend', carouselParent);


        // Assign button
        const carouselButton = document.createElement('button');
        carouselButton.setAttribute('data-bs-target', '#hero-carousel');
        carouselButton.setAttribute('data-bs-slide-to', index+1);

        document.querySelector('div.carousel-indicators')
                .insertAdjacentElement('beforeend', carouselButton);

    });

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