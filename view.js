
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.


Rectangle.prototype.paint = function(ctx) {
//TODO Manager color
    ctx.strokeStyle=this.couleur;
    ctx.lineWidth=this.epaisseur;

    ctx.rect(this.orgX, this.orgY, this.orgX+this.larg, this.orgY+this.haut );
    ctx.stroke();

};


Line.prototype.paint = function(ctx) {
//TODO Manager color
    ctx.strokeStyle=this.couleur;
    ctx.lineWidth=this.epaisseur;

    ctx.beginPath();
    ctx.moveTo(this.xA, this.yA);
    ctx.lineTo(this.xB, this.yB);
    ctx.stroke();
};


Drawing.prototype.paint = function(ctx) {
    console.log(this.formes);
    ctx.fillStyle = '#F0F0F0'/*'#F0F0F0'*/; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.formes.forEach(function(eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};