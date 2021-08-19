class Log
{
    constructor(x, y, height, angle)
    {
        var options = {'restitution': 1, 'friction': 1};

        this.bodyX = x;
        this.bodyY = y;
        this.bodyW = 20;
        this.bodyH = height;
        this.bodyA = angle;

        this.body = Bodies.rectangle(this.bodyX, this.bodyY, this.bodyW, this.bodyH, options);
        World.add(myWorld, this.body);
        Matter.Body.setAngle(this.body, this.bodyA);  
    }

    display()
    {
        push(); //store the previous settings of the canvas

        translate(this.body.position.x, this.body.position.y); //shifting the origin of the canvas to the (x,y) coordinate of the body/object
        rotate(this.body.angle);
        rectMode(CENTER); 
        rect(0, 0, this.bodyW, this.bodyH);
        
        pop(); //apply the previous settings of the canvas
    }
};