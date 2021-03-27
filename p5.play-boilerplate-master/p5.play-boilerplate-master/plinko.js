class plinko{
    constructor(x,y){
        var options = {
            isStatic:true
        }
        this.body = Bodies.circle(x,y,10,options);
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        var posX = this.body.position.x;
        var posY = this.body.position.y;
        push();
        translate(posX,posY);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(posX,posY,10,10);
        pop();
    }
}