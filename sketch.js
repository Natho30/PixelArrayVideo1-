/*
 *
 * Cinema Expandido WEB
 * Pixel Array (13 de febrero 2018)
 * Natalia González
 * 
 *
 * URL
 */


/*
 *****************************************
 *****************************************
 * VARIABLES
 *****************************************
 *****************************************
 */
 
 //int-entero 
 //float -decimal
 
 //java intuye la variable. usamos var 
 
 var video; 
 
 /*
 *****************************************
 *****************************************
 * LIFE CYCLE METHODS
 *****************************************
 *****************************************
 */
 
 function windowResized(){
   resizeCanvas(windowWidth,windowHeight);
 }

//set up solo corre una vez
function setup() {
  //createCanvas(1000,1000); //"lienzo"
  createCanvas(displayWidth,displayHeight); 
  initilizeVideo();
}
//draw corre cada frame por segundo.
function draw() {
  background(0);
  drawVideo();
  
  //setup y draw simepre van juntas. 
}

 /*
 *****************************************
 *****************************************
 * VIDEO METHODS
 *****************************************
 *****************************************
 */
 
 function initilizeVideo(){
   //indicar que el archivo es un video.
   video = createVideo("assets/video/1.mov");
   video.loop();
   video.hide();
   
 }
 
 function drawVideo(){
   var correctionX =(windowWidth /2)- video.width/2; 
   var correctionY =(windowHeight /2)- video.height/2; 
   
   video.loadPixels(); 
   
  for(var y =0; y < video.height;y++){
    
    for(var x = 0; x < video.width; x++ ){
     var index = (x + ( y *video.width)) *4; 
     
     //video.pixels[index] = 255; //aqui tengo los rojos. 
     
      video.pixels[index] = video.pixels[index +1];
      video.pixels[index + 3] = video.pixels [index + 3];  
     video.pixels[index + 0 ] = video.pixels [index + 3]; 
     video.pixels[index + 2 ] = video.pixels [index + 3];
    }
  }
   
   video.updatePixels(); 
   
   image(video,correctionX,correctionY); 
 }
 
