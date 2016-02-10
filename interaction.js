
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.

function DnD(canvas, Pencil) {
	this.xI = 0;
	this.yI= 0;
	this.xF= 0;
	this.yF= 0; 
	this.btPress=false;

	// Developper les 3 fonctions g�rant les �v�nements
	
    this.maFctGerantLaPression= function(evt) {
        if(this.btPress==false) {
            this.btPress=true;
            this.xI = getMousePosition(canvas, evt).x;
            this.yI = getMousePosition(canvas, evt).y;
            Pencil.onInteractionStart(this);

        }
      console.log(this.xI);
      	console.log(this.yI);
   }.bind(this) ;


	this.maFctGerantLeDeplacement = function(evt){
	 if(this.btPress==true) {
		this.xF=getMousePosition(canvas,evt).x;
        this.yF=getMousePosition(canvas,evt).y;
         Pencil.onInteractionUpdate(this);
        }
		console.log(this.xF);
      	console.log(this.yF);
      		
	}.bind(this);
	
		
	
	  this.maFctGerantLeRelachement=function(evt) {
        if(this.btPress==true){
            this.btPress=false;
            Pencil.onInteractionEnd(this);
            this.xI = 0;
            this.yI =0;
            this.xF = 0;
            this.yF =0;
          	console.log(this.xF);
            console.log(this.yF);
      }
    }.bind(this) ;

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



