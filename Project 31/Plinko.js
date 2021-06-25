class Plinko{
    constructor(x,y,radius){
        this.body = Bodies.circle(x,y,radius);
        World.add(world,this.body);
    }
     display(){
        var pPos = this.body.position;
        push();
        translate(pPos.x,pPos.y);
        ellipseMode(RADIUS);
        fill("white")
        pop();
     }

}