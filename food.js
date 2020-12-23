class Food{
    constructor(){
        this.image=loadImage("images/Milk.png")
    }
    display(){
        var x= 80, y=100;
        imageMode(CENTER)
        image(this.image, 720, 220, 70, 70)
        if(foodV!=0){
            for(var i=0; i<foodV; i=i+1){
                if(i%10==0){
                    x=80
                    y=y+50
                }
                image(this.image, x,y,50,50)
                x=x+30
            }
        }
    }
    garden(){
        background(gardenImage,550,500)
    }
    bedroom(){
        background(bedroomImage,550,500)
    }
    washroom(){
        background(washroomImage,550,500)
    }
}