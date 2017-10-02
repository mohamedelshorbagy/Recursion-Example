/* 

  # Mohamed Elshorbagy
  # Circles with Recursion Implementation in JS
  # 02 / 10 / 2017

*/ 




// Setup Function From P5 Library
function setup() {
createCanvas(600 , 600);
}

// Draw Function From P5 Library
function draw() {
background(0);
noFill();
stroke(42 , 242 , 120);
// Calling Recursion Function
drawCircleByRecursion(width / 2, height / 2 , 300);


}
// End of Draw Function


// Strat of DrawCircle Function
function drawCircleByRecursion(x , y , d) {
// Drawing the Circle
ellipse(x , y , d);

// Base Condition
// Condtion That Tells the Recursion to stop
if(d > 3) {

    // To Make Circles in the Right
   drawCircleByRecursion(x + d * 0.5, y , d * 0.5);
   // To Make Circles in the Left
   drawCircleByRecursion(x - d * 0.5, y ,d * 0.5);
}

}
// End of DrawCircle Function
