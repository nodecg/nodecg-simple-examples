let colour, nameElement;
const xPos = 150;   // X Position of lower third
const yPos = 1080;  // Initial Y position (out of frame)

const animationTime = 1000; // How long it takes to appear and disappear
const showTime = 3000;      // How long it shows the name
const animationSpeed = 5;   // Changes final height, reduce animation time to make shorter

let translateOnY = 0;   // Creates the offset for the animations

const animationStates = { Static: 0, Showing: 1, Hiding: 2 };   // Animation state enum
let animationState = animationStates.Static;    // Initial animation state

function setup() {
    createCanvas(1920, 1080);   // Create canvas for rect
    frameRate(60);  // Set a constant frame rate
    
	fill('#E69500');    // We're only displaying a single item so put the fill colour here
	noStroke();         // Remove the border

    // Create H1 element
    nameElement = createElement('h1', 'Testing name');
    
    // Styling
	nameElement.style('font-family', 'sans-serif');	// Set font to sans serif
	nameElement.style('color', '#FFFFFF');			// Set font colour
}

function draw() {
	clear();	// Background needs to be transparent

	// Check to see if in an animation
	if (animationState == animationStates.Showing) {
		translateOnY -= 5;
	} else if (animationState == animationStates.Hiding) {
		translateOnY += 5;
	}

	// Translate the rect
	translate(0, translateOnY);

	// Draw rect
	rect(
		xPos,
		yPos,
		nameElement.size().width + 20,	// Size to text
		nameElement.size().height + 40	// Size to text
	);

	// Set text position
	nameElement.position(xPos + 10, yPos + translateOnY);
}

// This listens for the "showLowerThird" message from the dashboard
nodecg.listenFor('showLowerThird', name => {
	nameElement.html(name);
	show();
});

// Show the lower third
function show() {
    animationState = animationStates.Showing;	// Set state

	// After the animation time set the state to static and run hide() after the show time
    setTimeout(() => {
		animationState = animationStates.Static;
        setTimeout(hide, showTime);
    }, animationTime);
}

// Hide the lower third
function hide() {
	animationState = animationStates.Hiding;	// Set state

	// After the animation time set the state back to static
	setTimeout(() => {
		animationState = animationStates.Static;
	}, animationTime);
}
