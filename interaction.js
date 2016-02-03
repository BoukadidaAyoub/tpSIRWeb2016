
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {

	
	var Xi = 0 ;
	var Yi = 0 ;
	var Xf = 0 ;
	var Yf = 0 ;

	// Developper les 3 fonctions gérant les événements
	function maFctGerantLaPression(evt){
	
	var res= getMousePosition(canvas, evt);
	console(res).log;
	
	}.bind(this);
	function maFctGerantLeDeplacement(evt){
	
	var res= getMousePosition(canvas, evt);
	console(res).log;
	
	}.bind(this);
	function maFctGerantLeRelachement(evt){
	
	var res= getMousePosition(canvas, evt);
	console(res).log;
	
	}.bind(this);
	

	// Associer les fonctions précédentes aux évènements du canvas.
	canvas.addEventListener('mousedown', this.maFctGerantLaPression, false);
	canvas.addEventListener('mousemove', this.maFctGerantLeDeplacement, false);
	canvas.addEventListener('mouseup', this.maFctGerantLeRelachement, false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



