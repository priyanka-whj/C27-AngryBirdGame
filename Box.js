class Box
{
    constructor(x, y, width, height)
    {
        var options = {'restitution': 1};

        this.bodyX = x;
        this.bodyY = y;
        this.bodyW = width;
        this.bodyH = height;

        this.body = Bodies.rectangle(this.bodyX, this.bodyY, this.bodyW, this.bodyH, options);
        World.add(myWorld, this.body);
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