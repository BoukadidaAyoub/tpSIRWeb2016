
// La cr√©ation d'un Dnd requi√®re un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au d√©part.

function DnD(canvas, interactor) {
	this.xI = 0;
	this.yI= 0;
	this.xF= 0;
	this.yF= 0; 
	this.btPress=false;

	// Developper les 3 fonctions gÈrant les ÈvÈnements
	
    this.maFctGÈrantLaPression = function(evt) {
        if(this.btPress==false) {
            this.btPress=true;
            this.xI = getMousePosition(canvas, evt).x;
            this.yI = getMousePosition(canvas, evt).y;
            //pencil.onInteractionStart(this);
        }
/*      console.log(this.xI);
      	console.log(this.yI);
  */  }.bind(this) ;


	this.maFctGÈrantLeDÈplacement = function(evt){
	 if(this.btPress==true) {
		this.xF=getMousePosition(canvas,evt).x;
        this.yF=getMousePosition(canvas,evt).y;		
        //pencil.onInteractionUpdate(this);
        }
		console.log(this.xF);
      	console.log(this.yF);
      		
	}.bind(this);
	
		
	
	  this.maFctGÈrantLeRel‚chement=function(evt) {
        if(this.btPress==true){
            this.this.btPress=false;
            pencil.onInteractionEnd(this);
            this.xI = 0;
            this.yI =0;
            this.xF = 0;
            this.yF =0;
/*            	console.log(this.xF);
            	console.log(this.yF);*/
      }
    }.bind(this) ;

	// Associer les fonctions pr√©c√©dentes aux √©v√®nements du canvas.
	canvas.addEventListener('mousedown', this.maFctGerantLaPression, false);
	canvas.addEventListener('mousemove', this.maFctGerantLeDeplacement, false);
	canvas.addEventListener('mouseup', this.maFctGerantLeRelachement, false);
};


// Place le point de l'√©v√©nement evt relativement √† la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



