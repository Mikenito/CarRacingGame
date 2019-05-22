var keys;

{
   keys = new THREEx.KeyboardState(); 

		if(keys.pressed("left")) {     car.rotation.y += 0.1;  angle+=0.1;   }
 if(keys.pressed("right")) {   car.rotation.y -= 0.1;  angle-=0.1;
    // car.rims.rotation.z=90;
    } 
if(keys.pressed("up")) {      car.position.z -=Math.sin(-angle)*speed;     car.position.x -= Math.cos(-angle)*speed;

 speed+=0.01;

 } 
if(keys.pressed("down")) {  speed.update; car.position.z += Math.sin(-angle)*acc;     car.position.x += Math.cos(-angle)*acc;
 
 acc=acc+0.01; 
 } 

}
