class particle{
    constructor(x,y,radius){
        var options = {
            restitution:0.9,
            density:0.7,
            friction:0.6
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        var posX = this.body.position.x;
        var posY = this.body.position.y;
        push();
        translate(posX,posY);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(CENTER);
        ellipse(posX,posY,this.radius,this.radius);
        pop();
    }
}