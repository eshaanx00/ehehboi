class drop{
    constructor(x,y){
        var option={
            friction:0.1
        }
this.body=Bodies.circle(x,y,10,option)
World.add(world,this.body)

    }
    update(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,1000),y:20})
        }
    }
    display(){
        var pos=this.body.position;
        fill("blue")
        ellipseMode(CENTER)
        ellipse(pos.x,pos.y,10,10)
    }

}