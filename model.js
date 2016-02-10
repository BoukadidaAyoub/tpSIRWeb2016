
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !



//Class Drawing
function Drawing() {
    //D�clarer un array
    this.formes = new Array();
};


//Classe formes
function formes(epaisseur, couleur) {
    this.epaisseur=epaisseur;
    this.couleur=couleur;

};


//Classe Rectangle
function Rectangle(orgX, orgY, larg, haut, epaisseur, couleur) {
    formes.call(this, epaisseur, couleur);
    this.orgX=orgX;
    this.orgY=orgY;
    this.larg=larg;
    this.haut=haut;
};
Rectangle.prototype = new formes();


//Classe Line
function Line(xA, yA, xB, yB, epaisseur, couleur) {
    formes.call(this, epaisseur, couleur);
    this.xA=xA;
    this.yA=yA;
    this.xB=xB;
    this.yB=yB;
};
Line.prototype = new formes();
