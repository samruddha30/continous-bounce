In this project we are going to recreate gravity using 4 balls/sprites.
Create 4 sprites. You can give it any animation for setAnimation 
(Ball, person jumping...).

Each sprite should a different gravity
Every time the sprite COLLIDES with the ground bounce the sprite back in the air.

Observe how high the sprite bounces off the ground and how long it takes
to get to the ground.

Understand the impact each variable has on the sprite.

OPTIONAL:
You can have different velocities for each sprite as well.
Every time the sprite collides with the ground, give that sprite +1 point.

*/



// Create a global startVelocity variable
var ground = createSprite(200, 200);
ground.setAnimation("underground_1");



// Create the first sprite and setAnimation to the sprite
// Also set it's gravity
var ball1 = createSprite(50, 200,20,20);
ball1.setAnimation("blue_ball");
var ball2 = createSprite(150, 250,20,20);
ball2.setAnimation("green_ball");
var ball3 = createSprite(250, 250,20,20);
ball3.setAnimation("silver_ball");
var ball4 = createSprite(350, 250,20,20);
ball4.setAnimation("bronze_ball");

createEdgeSprites();

ball1.velocityY=2;


ball1.velocityY=ball1.velocityY=2.8;
ball2.velocityY=1;


ball2.velocityY=ball1.velocityY=1.8;
ball3.velocityY=0.5;


ball3.velocityY=ball1.velocityY=3.8;
ball4.velocityY=3;
ball4.scale=0.5;

ball4.velocityY=ball1.velocityY=1;


// Create the second sprite and setAnimation to the sprite
// Also set it's gravity


// Create the third sprite and setAnimation to the sprite
// Also set it's gravity


// Create the fourth sprite and setAnimation to the sprite
// Also set it's gravity



function draw() {
  background("white");
  
  
   ball1.bounceOff(edges);
   ball2.bounceOff(edges);
   ball3.bounceOff(edges);
   ball4.bounceOff(edges);
  
  /* 
    Create the condition where we find out if the first sprite collides
    with the bottomEdge :
      IF SO - give it the intended velocity.
  */
  
    
    
    
    
  
  
  
  
  
  
  /* 
    Now when the sprite doesn't collide with the ground,
    Add gravity to the ball.
    You have learnt how to do it in the Trex Class.
  */
 
 
 
 
  
  // DO THE SAME FOR THE REST OF THE SPRITES
  
  
  
  
  drawSprites();
}
