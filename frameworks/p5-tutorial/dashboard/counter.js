let addButton, subtractButton;

// Create NodeCG replicant
const counterRep = nodecg.Replicant('counter', {defaultValue: 0});

function setup() {
	// Setup add button and behaviour
	addButton = createButton('Add');
	addButton.position(10, 15);
	addButton.mousePressed(add);

	// Setup subtract button and behaviour
	subtractButton = createButton('Subtract');
	subtractButton.position(60, 15);
	subtractButton.mousePressed(subtract);
}

function add() {
	// Increase counter by one
	counterRep.value++;
}

function subtract() {
	// Decrease counter by one
	counterRep.value--;
}
