
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !



//Class Drawing
function Drawing() {
    //D�clarer un array
    this.general = new Array();
};


//Classe general
function general(epaisseur, couleur) {
    this.couleur=couleur;
    this.epaisseur=epaisseur;
};


//Classe Rectangle
function Rectangle(orgX, orgY, larg, haut, epaisseur, couleur) {
    general.call(this, epaisseur, couleur);
    this.orgX=orgX;
    this.orgY=orgY;
    this.larg=larg;
    this.haut=haut;
};
Rectangle.prototype = new general();


//Classe Line
function Line(xA, yA, xB, yB, epaisseur, couleur) {
    general.call(this, couleur, epaisseur);
    this.xA=xA;
    this.yA=yA;
    this.xB=xB;
    this.yB=yB;
};
Rectangle.prototype = new general();
