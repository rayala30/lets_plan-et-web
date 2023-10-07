import {getSites} from "./PlanetService.js";
import { addToItinerary, removeItemFromItinerary, displayItinerary} from "./ItineraryService.js";




// Add event listeners for page
document.addEventListener('DOMContentLoaded', () => {
   

    // Add event listeners for all "Save to Itinerary" buttons. Query selection will create an array of Save Itinerary buttons
    const saveButtons = document.querySelectorAll('.save-itin-btn');
    saveButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const modalContent = event.target.closest('.modal-content');
            if (modalContent) {
                const title = modalContent.querySelector('.package-label').innerText;
                const imageSrc = modalContent.querySelector('.banner-img').src;
                addToItinerary(title, imageSrc);
                displayItinerary();
            }
        });
    });
 

    // Get the current saved package container
    const itineraryContainer = document.querySelector('.saved-package');

    // Remove item from itinerary
    itineraryContainer.addEventListener('click', (event) => {
        //
        if (event.target.classList.contains('btn-delete')) {
            // Get the unique ID of the clicked item's parent
            const itemId = event.target.closest('.package-elements').id;
        
            // Call the removeItemFromItinerary function with the item ID
            removeItemFromItinerary(itemId);

            displayItinerary();
        }
    });



    document.getElementById('view-itin-btn').addEventListener('click', displayItinerary);

    
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
        carouselParent.setAttribute('data-bs-interval', "20000");

        const carouselImg = document.createElement('img');
        carouselImg.setAttribute('src', image);
        carouselImg.setAttribute('class', 'd-block w-100 c-img');

        const carouselCaptionParent = document.createElement('div');
        carouselCaptionParent.setAttribute('class', 'carousel-caption d-none d-md-block');

        const carouselName = document.createElement('h3');
        carouselName.setAttribute('class', 'text-uppercase fw-bold text-start');
        carouselName.setAttribute('style', 'text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.90);');
        carouselName.innerText = name;

        const carouselPlanet = document.createElement('h4');
        carouselPlanet.setAttribute('class', 'text-start')
        carouselPlanet.setAttribute('style', 'text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.90);');
        carouselPlanet.innerText = planet;

        const carouselFact = document.createElement('p');
        carouselFact.setAttribute('class', 'text-start')
        carouselFact.setAttribute('style', 'text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.90);');
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

    
}



