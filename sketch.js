var E = Matter.Engine
var W = Matter.World
var B = Matter.Bodies

var en, wo

var b1

function setup() {
  createCanvas(1200,600);

  en = E.create()
  wo = en.world

  b1 = new Building(1000,350)
}

function draw() {
  E.update(en)
  background(255,255,255); 
  
  
  b1.display()
  
}