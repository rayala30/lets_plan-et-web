import {getSites} from "./PlanetService.js";
import { addToItinerary, removeItemFromItinerary, displayItinerary} from "./ItineraryService.js";




// Add event listeners for page
document.addEventListener('DOMContentLoaded', () => {
    // Save button will be in Trip Package Card
    document.querySelector('.save-itin-btn').addEventListener('click', (event) => {
        // Find parent element
        const modalContent = event.target.closest('.modal-content');

        if (modalContent) {
            // Extract title and image source from modalContent
            const title = modalContent.querySelector('.package-label').innerText;
            const imageSrc = modalContent.querySelector('.banner-img').src;

            // Call addToItinerary function
            addToItinerary(title, imageSrc);

            displayItinerary();
            
        }
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
        carouselName.innerText = name;

        const carouselPlanet = document.createElement('h4');
        carouselPlanet.setAttribute('class', 'text-start')
        carouselPlanet.innerText = planet;

        const carouselFact = document.createElement('p');
        carouselFact.setAttribute('class', 'text-start')
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



