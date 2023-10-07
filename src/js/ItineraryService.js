// Create an empty array of objects to store itinerary items 
const itineraryItems = [];

// Create a variable to item count
let itemCount = 0;

// Function for adding itinerary item to array
export async function addToItinerary(title, imageSrc) {
    // Increment itemcount 
    itemCount++;

    // Create an object representing the itinerary item
    const newItem = {
        id: `itineraryItem_${itemCount}`, // Unique ID 
        title: title,
        imageSrc: imageSrc
    };

    // Push the new object into array
    itineraryItems.push(newItem);

    // Update Itinerary UI in offcanvas
    displayItinerary();
}

export function removeItemFromItinerary(itemId) {
    // Find the index of the item with the given ID in the itineraryItems array
    const indexToRemove = itineraryItems.findIndex((item) => item.id === itemId);
  
    if (indexToRemove !== -1) {
      // Remove the item from the itineraryItems array
      itineraryItems.splice(indexToRemove, 1);
  
      // After removing the item, reassign IDs to the remaining items
      reassignItemIds();
  
      // You can also update local storage or a database to reflect the removal if needed

    }
  }

// Function to reassign IDs to the remaining items
function reassignItemIds() {
    for (let i = 0; i < itineraryItems.length; i++) {
      itineraryItems[i].id = `itineraryItem_${i + 1}`;
    }
  }


  export function displayItinerary() {
    const itineraryContainer = document.querySelector('.saved-package');
    itineraryContainer.innerHTML = ''; // Clear existing content
  
    itineraryItems.forEach((item) => {
        // Create a div for package items
        const packageElement = document.createElement('div');
        packageElement.setAttribute('class', 'package-elements');
        packageElement.setAttribute('style', 'border-bottom: 1px solid; padding-bottom: 15px;');
        packageElement.id = item.id;


        // Create a heading element for the title
        const titleElement = document.createElement('h1');
        titleElement.setAttribute('class', 'modal-title fs-5 fw-bold package-label');
        titleElement.setAttribute('style', 'text-align: left;')
        titleElement.innerText = item.title;

        // Create a div element to parent the image and button
        const itinElements = document.createElement('div');
        itinElements.setAttribute('class', 'itin-image-btn');
  
        // Create an image element
        const imageElement = document.createElement('img');
        imageElement.src = item.imageSrc;
        imageElement.alt = item.title;
        imageElement.setAttribute('class', 'offcanvas-img');
  
        // Create a button element to remove the item
        const removeButton = document.createElement('button');
        removeButton.setAttribute('class', 'btn-delete remove-itinerary-item');

        // Append image and button to itinelements div
        itinElements.appendChild(imageElement);
        itinElements.appendChild(removeButton);
  
        // Append the image, title, and remove button to the package element
        packageElement.appendChild(titleElement);
        packageElement.appendChild(itinElements);
  
        // Append the itinerary item element to the container
        itineraryContainer.appendChild(packageElement);
    });
  }
  
  