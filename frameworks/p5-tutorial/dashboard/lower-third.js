let input, button;

function setup() {
	// Setup input
	input = createInput();
	input.position(20, 15);

	// Setup button and behaviour
	button = createButton('Show');
	button.position(input.x + input.width, 15);
	button.mousePressed(showLowerThird);
}

function showLowerThird() {
	// Send message to graphic
	nodecg.sendMessage('showLowerThird', input.value());
}
