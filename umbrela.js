class umbrella{
    constructor(x,y){
        var option={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,option)
        this.image=loadImage("Walking Frame/walking_1.png")
        this.width = width;
        this.height = height;
        World.add(world,this.body)
      
    }
display(){
    var pos=this.body.position;
    imageMode(CENTER)
    image(this.image, pos.x, pos.y);
}
}