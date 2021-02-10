class Rope {
    constructor(body1,body2,offsetX,offsetY) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA : body1,
            bodyB : body2,
            pointB : {x: this.offsetX, y : this.offsetY}
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }

    constraintDisplay() {
        var point1 = this.chain.bodyA.position;
        var point2 = this.chain.bodyB.position;
        push();
        strokeWeight(5);
        line(point1.x,point1.y,point2.x,point2.y);
        pop();
        // line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,
        //     this.chain.bodyB.position.x,this.chain.bodyB.position.y);

    }
}