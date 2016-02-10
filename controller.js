
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart=function(DnD){
		var butRect = this.getElementById(butRect);
		var butLine =this.getElementById(butLine);
		var spinnerWidth= this.getElementById(spinnerWidth);
		var colour= this.getElementById(colour);

		this.currLineWidth= spinnerWidth.value;
		this.currColour= colour.value;

		console.log('epaisseur' +this.currLineWidth+' '+'couleur' +this.currColour);






	}.bind(this);
	this.onInteractionUpdate=function(DnD){

	}.bind(this);

	this.onInteractionEnd=function(DnD){

	}.bind(this);

};


