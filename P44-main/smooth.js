class Smooth {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.x=x;
      this.y=y;
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/wood2.png");
      this.body = Bodies.rectangle(x,y,width,height,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(0);
      imageMode(CENTER);
      image(this.image,0, 0, this.width, this.height);
     // image(this.image,100, 100, 400, 20);
      pop();
    }
  };
