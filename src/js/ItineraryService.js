// Create an empty array of objects to store itinerary items 

const itineraryItems = [];

// Function for adding itinerary item to array
export async function addToItinerary(title, imageSrc) {
    // Create an object representing the itinerary item
    const newItem = {
        title: title,
        imageSrc: imageSrc
    };

    // Push the new object into array
    itineraryItems.push(newItem);

    // Update Itinerary UI in offcanvas
    updateItineraryUI();
}

export function removeItemFromItinerary(title) {
    
}