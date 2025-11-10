// Get the image element with ID "display" from the DOM
let image = document.getElementById("display");

// Define a function that the droid will call whenever the visibility of the image changes
function change_image_size(entries) {

    let entry = entries[0];   // Get the first (and only) observed entry

    // Check if the image is at least 50% visible in the viewport
    if (entry.isIntersecting == true) {

        // If it is, add the "shrink" class to the image (e.g., to reduce its size)
        image.classList.add("shrink");
    }
}

// Create an IntersectionObserver (our "image-watching droid")
// It will call 'change_image_size' when visibility of the image changes,
// and it only cares when at least 50% of the image is visible
let observer_image = new IntersectionObserver(change_image_size, { threshold: 0.5 });

// Assign the droid to observe the image element
observer_image.observe(image);

// Find all motor spec cards inside the #motor > .specs section
// These are the cards our second droid will be watching
let container = document.getElementById("motor").querySelector(".specs").querySelectorAll(".motor_spec_card");

// Define a function for the container-watching droid
// It will be triggered when any of the observed cards change visibility
function change_opacity_text(entries) {

    // Get the first three entries (cards being watched)
    let entry1 = entries[0];
    let entry2 = entries[1];
    let entry3 = entries[2];

    // If all three are currently visible in the viewport (at least 20% visible)
    if (entry1.isIntersecting == true && entry2.isIntersecting == true && entry3.isIntersecting == true) {

        // Add the "see" class to all the motor spec cards
        container.forEach(div => div.classList.add("see"));
    }
}

// Create a second IntersectionObserver for watching the motor spec cards
// It triggers when at least 20% of a card is visible
let observer_container = new IntersectionObserver(change_opacity_text, { threshold: 0.2 });

// Tell the second droid to start observing each individual motor spec card
container.forEach(div => observer_container.observe(div));