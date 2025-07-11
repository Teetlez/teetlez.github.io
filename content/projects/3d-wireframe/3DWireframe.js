/*
- code adapted from the 3D tutorial on Kahn Programming.
- special thanks to those that answed questions to help me make this.
- please give credit where due.


Spin camera with

- ALT   =counter clockwise
- CTRL  =clockwise
- UP    =rotate front up
- DOWN  =rotate front down
- LEFT  =rotate front left
- RIGHT =rotate front right
*/

void setup() {
    size(400, 400, P2D);
    background(255, 193, 5);
};  

var backgroundColour = color(255, 193, 5);
var edgeColour       = color(255, 0, 136);
var nodeSize         = 8;

//used by noise algorithim to grab noise value
var xoff = 0;
var yoff = 0;

//smoothness of the noise
var nSize = 0.005;

//create empty array to fill with node XYZ positions
var nodes = [];

//nested loop to create node array and save time
for (var y=-150; y<=150; y+=50){
    for (var x=-150; x<=150; x+=50){
        nodes.push([x, y, map(noise((xoff-y)*nSize,(yoff-x)*nSize),0,1,-200,200)]);
        xoff+=3;
        yoff+=3;
    }
}
void rotateZ3D(theta) {
    var sinTheta = sin(theta);
    var cosTheta = cos(theta);
    for (var n = 0; n < nodes.length; n++) {
        var node = nodes[n];
        var x = node[0];
        var y = node[1];
        node[0] = x * cosTheta - y *sinTheta;
        node[1] = y * cosTheta + x * sinTheta;
    }
};

void rotateY3D(theta) {
   var sinTheta = sin(theta);
   var cosTheta = cos(theta);
   for (var n = 0; n < nodes.length; n++) {
      var node = nodes[n];
      var x = node[0];
      var z = node[2];
      node[0] = x * cosTheta - z * sinTheta;
      node[2] = z * cosTheta + x * sinTheta;
   }
};

void rotateX3D(theta) {
   var sinTheta = sin(theta);
   var cosTheta = cos(theta);
   for (var n = 0; n < nodes.length; n++) {
      var node = nodes[n];
      var y = node[1];
      var z = node[2];
      node[1] = y * cosTheta - z * sinTheta;
      node[2] = z * cosTheta + y * sinTheta;
   }
};


void draw() {
    translate(200, 200);
    background(backgroundColour);
    
    // Draw edges
    noFill();
    stroke(edgeColour);
    //ignores certain line draws to avoid line wrap around
    for(var y = 0; y < nodes.length-1; y++){
         var node = nodes[y];
         
        //target node one to the right of selected one
         var node1 = nodes[y+1];
         
         //the line calls that will be ignored
         if(nodes[y]===nodes[6]||nodes[y]===nodes[13]||nodes[y]===nodes[20]||nodes[y]===nodes[27]||nodes[y]===nodes[34]||nodes[y]===nodes[41]){
             
         }else{
             
         line(node[0],node[1],node1[0],node1[1]);
         
         }
     }
     
    for(var y = 0; y < nodes.length-8; y++){
         var node = nodes[y];
         
         //target a node one row down and one column to the right
         var node2 = nodes[y+8];
         
         //the line calls that will be ignored
         if(nodes[y]===nodes[6]||nodes[y]===nodes[13]||nodes[y]===nodes[20]||nodes[y]===nodes[27]||nodes[y]===nodes[34]){
             
    }else{
        
         line(node[0],node[1],node2[0],node2[1]);
        }
     }
     
    for(var y = 0; y < nodes.length-7; y++){
         var node = nodes[y];
         
         //target node directly below it
         var node3 = nodes[y+7];
         
         //no need to avoid line wrap around
         line(node[0],node[1],node3[0],node3[1]);
     }
     
    //draw nodes
    noStroke();
    for (var x = 0; x < nodes.length; x++) {
        var node = nodes[x];
        
        //node z depth determines green color
        fill(0, map(node[2],-150,150,255,0), 255);
        
        //node z depth determines size
        nodeSize = -(node[2]/100)+5;
        ellipse(node[0], node[1], nodeSize, nodeSize);
    }
    
    //rotation controls
    if(keyPressed && keyCode === UP){
        rotateX3D(-0.2);
    }else if(keyPressed && keyCode === DOWN){
        rotateX3D(0.2);   
    }else if(keyPressed && keyCode === LEFT){
        rotateY3D(-0.2);
    }else if(keyPressed && keyCode === RIGHT){
        rotateY3D(0.2);
    }else if(keyPressed && keyCode === ALT){
        rotateZ3D(0.2);
    }else if(keyPressed && keyCode === CONTROL){
        rotateZ3D(-0.2);
    }else{
        rotateX3D(0);
        rotateY3D(0);
        rotateZ3D(0);
    }
    
    //return position after rotation
};