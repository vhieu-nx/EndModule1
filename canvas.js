
class Circle{
    constructor(x,y,radius,color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
    Render(){
        let ctx = document.getElementById("myCanvas").getContext("2d");
        let circle= new Circle(this.x, this.y, this.radius,this.color);
        ctx.beginPath();
        ctx.fillStyle = circle.color;
        ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
        ctx.fill();
    }
}

let cirle = new Circle(10,10,100,"#000000");
cirle.Render();
