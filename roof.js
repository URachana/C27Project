class Roof{

    constructor(x,y,width,height){

        this.body = Bodies.rectangle(x,y,width,height,{isStatic:true});
        World.add(myWorld,this.body);
        this.width = width;
        this.height = height;
    }
    display(){
        rectMode(CENTER);
        fill("black");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }


}
