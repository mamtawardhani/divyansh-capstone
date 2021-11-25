class Building{

    constructor(x,y){
        var options= {restitution:0.7}
        this.body = B.rectangle(x,y,50,50, options)
        W.add(wo, this.body)
    }

    display(){
        var pos = this.body.position
        rectMode(CENTER)
        rect(pos.x, pos.y, 50,50)
    }


}