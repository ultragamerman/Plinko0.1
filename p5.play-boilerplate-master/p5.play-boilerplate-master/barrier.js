class barrier{
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.height = height;
        this.width = width;
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        var posX = this.body.position.x;
        var posY = this.body.position.y;
        push();
        translate(posX,posY);
        rotate(angle);
        rectMode(CENTER);
        rect(posX,posY,this.width,this.height);
        pop();
    }
}