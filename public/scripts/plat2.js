(function() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();
var playerImg=document.getElementById("skin1");
var baddyLImg =document.getElementById("baddyL")
var baddyRImg =document.getElementById("baddyR")
var canvas = document.getElementById("canvas"),
context = canvas.getContext("2d"),
width=1336,
height=900,
keys = [],
friction = 0.8,
gravity = 0.15;
canvas.width = width;
canvas.height = height;

player = {
  x: 1320,
  y: 221,
  width:7,
  height:15,
  speed:3,
  velX:0,
  velY:0,
  jumping: false,
  grounded: false,
  sliding:false,
  skin:playerImg,
  dead:0,
  onTiger:false
};

badGuy = {
  x: 0,
  y: 738,
  width:24,
  height:12,
  speed:3,
  velX:3,
  velY:1,
  dir:"R",
  jump: 0,
  grounded: false,
  sliding:false,
  skin:baddyRImg,
  skinL:baddyLImg,
  skinR:baddyRImg,
  dead:false
}






var Crate = function()
{ 

for(i=0; i<crates.length; i++){
context.drawImage(crates[i].skin, crates[i].x,crates[i].y,crates[i].width,crates[i].height)
  
// push the crate
  var dir = colCheck(player, crates[i]);
  if (dir === "l"){
    crates[i].x = crates[i].x+ player.velX
    player.jumping = false;

  }else if(dir ==="r"){
    crates[i].x = crates[i].x+ player.velX
    player.jumping = false;
  }else if (dir === "b"){
    player.grounded = true;
    player.jumping = false;
    player.velY = 0
  } else if (dir === "t" && player.grounded === false) {
    player.velY *= -1;
  } else if (dir === "t" && player.grounded === true) {
    Die()
  }

       if (crates[i].x > width){
      crates[i].x = 0;
    }else if (crates[i].x < 0){
      crates[i].x = width-crates[i].width;
    } 
  crates[i].y += crates[i].velY;
};

for(j=0;j<crates.length; j++){
 if(j != crates.length-1){
  var dir = colCheck(crates[j], crates[j+1]);
  if (dir === "l"){
    console.log(crates[j].name +" is hitting "+ crates[j+1].name+" on the left side")
    crates[j].x = crates[j].x+player.velX
    crates[j+1].x=crates[j+1].x+player.velX

  }else if(dir ==="r"){
    console.log(crates[j].name +" is hitting "+ crates[j+1].name+" on the right side")
    crates[j].x = crates[j].x+player.velX
    crates[j+1].x=crates[j+1].x+player.velX
  }else if (dir === "b"){
    crates[j].y = crates[j+1].y-25;
    crates[j].x = crates[j+1].x
   }//else if (dir === "t"){
  //   crates[j+1].vely = crates[j].vely;
  // }
  } 
}
};

var Jump = function(){
  if(!player.jumping && player.grounded){
   player.jumping = true;
   player.grounded = false;
   player.velY = -player.speed*1.5;
   player.velX *= friction;
   player.x += player.velX;
   player.y += player.velY;
 }
}


var extlink = ""
var points = 0
var game = {
  mode:"hard",
  over:"false"
}
Reset = function(){
  player.x = 1320;
  player.y = 221;
  lives.pop();
}
Score = function(){
  context.fillStyle = "slateGray";
  context.font = "bold 30px courier"
  context.fillText(points,1120+68,185);
  $('#background')
}
Its = function(){
  context.fillStyle = "DarkGray";
  context.font = "bold 20px courier"
  context.fillText("its",50,50)
}
Lose = function(){
  context.fillStyle = "Red";
  context.font = "bold 20px courier"
  game.over = true
  context.fillText("GAME OVER",1153+68,221)
}
Die = function(){
  player.dead++
  context.fillStyle = "Red";
  context.font = "bold 20px courier"
  context.fillText("you died",1153+68,221)
}

OpenLink = function(){
  setTimeout(function(){
   window.open(extLink)
 },300);

}

var ctrlCounter = 0


//array for pictures in slideshow

var projPic = [
{src:"public/images/carousel/projects/ricks.jpg",
lnk:"http://45.55.154.205:3002/",
name:"rick's"},
{src:"public/images/carousel/projects/painter.jpg",
lnk: "http://45.55.154.205:3000/",
name:"painter"},
{src:"public/images/carousel/projects/refrigerator.jpg",
lnk:"http://45.55.155.149:8080" ,
name:"re:fridge"},
{src:"public/images/carousel/projects/designist.jpg",
lnk: "http://45.55.154.205:3001/designistforum/",
name:"designist"},
{src:"public/images/carousel/projects/itsnatscott.gif",
lnk: "http:www.itsnatscott.com",
name:"itsnatscott"}
];

var adPic = [
{src:"public/images/carousel/ads/punch.jpg",
lnk:"http://itsnatscott.com/public/images/high/punch.jpg",
name:"punch"},
{src:"public/images/carousel/ads/ramen.jpg",
lnk:"http://itsnatscott.com/public/images/high/ramen.jpg",
name:"ramen"},
{src:"public/images/carousel/ads/lucha.gif",
lnk:"http://itsnatscott.com/public/images/high/lucha.gif",
name:"lucha"},
{src:"public/images/carousel/ads/diamond.jpg",
lnk:"http://itsnatscott.com/public/images/high/diamond.jpg",
name:"diamond"},
{src:"public/images/carousel/ads/chinatown.jpg",
lnk:"http://itsnatscott.com/public/images/high/chinatown.jpg",
name:"chinatown"},
{src:"public/images/carousel/ads/99.jpg",
lnk:"http://itsnatscott.com/public/images/high/99.jpg",
name:"99"},
{src:"public/images/carousel/ads/web.gif",
lnk:"http://itsnatscott.com/public/images/high/web.gif",
name:"web awards"},


]

var artPic = [
{src:"public/images/carousel/art/doodle.jpg",
lnk:"http://itsnatscott.com/public/images/high/doodle.jpg",
name:"doodle"},
{src:"public/images/carousel/art/dragon.jpg",
lnk: "http://itsnatscott.com/public/images/high/dragon.jpg",
name:"dragon"},
{src:"public/images/carousel/art/supply.jpg",
lnk:"http://itsnatscott.com/public/images/high/supply.jpg" ,
name:"supply"},
{src:"public/images/carousel/art/choice.jpg",
lnk:"http://itsnatscott.com/public/images/high/cshigh.jpg" ,
name:"sweets"},
{src:"public/images/carousel/art/lab.jpg",
lnk:"http://itsnatscott.com/public/images/high/lab.jpg" ,
name:"lab"},
{src:"public/images/carousel/art/duck.jpg",
lnk:"http://itsnatscott.com/public/images/high/duck.jpg" ,
name:"duck"},
{src:"public/images/carousel/art/meal.jpg",
lnk:"http://itsnatscott.com/public/images/high/meal.jpg" ,
name:"meal"},
{src:"public/images/carousel/art/train.gif",
lnk:"http://itsnatscott.com/public/images/high/train.gif" ,
name:"train"},
{src:"public/images/carousel/art/sadfishat.jpg",
lnk:"http://itsnatscott.com/public/images/high/sadfishat.jpg" ,
name:"sadfishat"}
];

var random = [
{src:"public/images/carousel/random/random.gif",
lnk:"",
name:""},
{src:"public/images/carousel/random/random.gif",
lnk:"",
name:""},
{src:"public/images/carousel/random/random.gif",
lnk:"",
name:""}
]




var picRay = random
var slidePic = 0
var picCounter = 1




//////////////////////////////////////////////////////////
//game loop
function update(){
  var canHeight = $("#canvas").css("height")
  var canWidth = $("#canvas").css("width")
  $("#background").css('height', canHeight);
  $("#background").css('width',canWidth);
  $("#easyButt").css('width',canWidth);
  $("#easyButt").css('height',canHeight);

  if(player.grounded === true){
    player.y=player.y
  }

  if(player.onTiger === true && player.jumping === false){
    player.x = badGuy.x+12;
    player.velY = 0;
  };

  context.clearRect(0,0,width,height);
//run instructions function
if (player.x===1320 && player.y===221){
  $("#bubble").attr("src", "public/images/bubble.gif")
}
  //pause after dying
Crate();

  if(player.dead>=90){
    player.dead=0
    Reset();
  }

  if(player.dead > 0){
    player.dead++
  }

  //moving cloud platform & cloudBg
  if (cloud.x < width){
    cloud.x = cloud.x+1;
    for(i=0; i<cloudBg.length; i++){
      cloudBg[i].x = cloudBg[i].x +1
    }
  }else{cloud.x = 0;
    for(i=0; i<cloudBg.length; i++){
      cloudBg[i].x = cloudBg[i].orgX
    }
  };

 //////////////////////////////////////////////// //check touch
 $("#jump").click(function(){
  if(!player.jumping && player.grounded){
         player.jumping = true;
         player.grounded = false;
         player.velY = -player.speed*4;
         player.velX *= friction;
 }
})
  $("#left").click(function(){
  if (player.velX > -player.speed) {
          player.velX--;
        }
})
    $("#right").click(function(){
  if (player.velX < player.speed) {             
          player.velX++;         
        }     
})


  // check keys
  if (keys[38] || keys[32]) {
        // up arrow or space
        if(!player.jumping && player.grounded){
         player.jumping = true;
         player.grounded = false;
         player.velY = -player.speed*2;
         player.velX *= friction;
       }
     }
     if (keys[39]) {
        // right arrow
        if (player.velX < player.speed) {             
          player.velX++;         
        }     
      }     
      if (keys[37]) {         
        // left arrow         
        if (player.velX > -player.speed) {
          player.velX--;
        }
      }

      if (keys[40]) {         
        // down arrow         
        if(player.jumping && !player.grounded){
         player.jumping = false;
         player.grounded = true;
         player.velY = +player.speed*3;
       }
     };


     player.velX *= friction;

     player.velY += gravity;


     if (player.x >= width-player.width){
      player.x = 0;
    }else if (player.x <= 0){
      player.x = width-player.width;
    }    



    context.fillStyle = "slateGray";
    context.beginPath();
    player.grounded = false;

//draw dark gray boxes and attach collision
for (var i = 0; i < boxes.length; i++) {
  context.fillStyle = "slateGray";
  context.fillRect(boxes[i].x, boxes[i].y, boxes[i].width, boxes[i].height);
  //player
  var dir = colCheck(player, boxes[i]);
  if (dir === "l" || dir === "r"){
    player.velX = 0;
    player.jumping = false;
  }else if (dir === "b"){
    player.grounded = true;
    player.jumping = false;
  } else if (dir === "t") {
    player.velY *= -1;
  }

  //crate
    // crate vs obsticle boxes
  
for(j=0;j<crates.length;j++){
    var dir1 = colCheck(crates[j], boxes[i]);
  if (dir1 === "l" || dir1 === "r"){
    player.velX = 0;
    player.jumping = false;
  }else if (dir1 === "b"){
    crates[j].grounded = true;
    crates[j].y = crates[j].y-.5
  } else if (dir1 === "t") {
    crates[j].grounded = false
  }
};

}



//draw control boxes

for (var i = 0; i< controlBox.length; i++){
  //set counter for bump animation
  if (controlBox[i].y < controlBox[i].org){ctrlCounter ++};
  if (ctrlCounter === 5){
    controlBox[i].y = controlBox[i].org;
    controlBox[i].yName = controlBox[i].yNameOrg;
    controlBox[i].color = controlBox[i].colorO;
    ctrlCounter = 0;
  };  

  //draw control boxes to canvas and attach collision
  if (controlBox[i].active === false){
    context.fillStyle = controlBox[i].color
  }else{
    context.fillStyle = controlBox[i].color2
  }
  context.fillRect(controlBox[i].x,controlBox[i].y,controlBox[i].width,controlBox[i].height);
  context.fillStyle = "DarkGray";

  ////////put type on control boxes
  context.font = controlBox[i].font;
  context.fillText(controlBox[i].name,controlBox[i].xName,controlBox[i].yName);

  ////open control box link
  var dir = colCheck(player, controlBox[i]);
  if (dir === "l" || dir === "r"){
    player.velX = 0;
    player.jumping = false;
  }else if (dir === "b"){
    player.grounded = true;
    player.jumping = false;
  } else if (dir === "t" && player.jumping === true && game.mode === "hard") {
    controlBox[i].y = controlBox[i].y -3;
    controlBox[i].yName = controlBox[i].yName -3;
    controlBox[i].color = "LightSlateGray";
    player.velY *= -1;

    //open link
    if(controlBox[i].type === "link" && controlBox[i].url != ""){
      player.jumping=false;
      extLink = (controlBox[i].url)
      OpenLink()

    }

    //pick a slide show
    if(controlBox[i].name === "Web"){
      $("#pic").attr("src", "public/images/carousel/random/about.gif");
      controlBox[i].active = true
      controlBox[3].active = false
      controlBox[4].active = false
      picCounter = 1;
      picRay = projPic;
      console.log(this)
      $("#pic").attr("src", picRay[picCounter].src);
      controlBox[8].url = (picRay[picCounter].lnk);
      $("#link").text(picRay[picCounter].name);
    }

    if(controlBox[i].name === "Art"){
      $("#pic").attr("src", "public/images/carousel/random/about.gif");
      controlBox[i].active = true
      controlBox[2].active = false
      controlBox[4].active = false
      picCounter = 1;
      picRay = artPic;
      $("#pic").attr("src", picRay[picCounter].src);
      controlBox[8].url = (picRay[picCounter].lnk);
      $("#link").text(picRay[picCounter].name);
    }

    if(controlBox[i].name === "Ads"){
      controlBox[i].active = true
      controlBox[2].active = false
      controlBox[3].active = false
      picCounter = 1;
      picRay = adPic;
      $("#pic").attr("src", picRay[picCounter].src);
      controlBox[8].url = (picRay[picCounter].lnk);
      $("#link").text(picRay[picCounter].name);
    }

    

    //fwd scroll through slides
    if(controlBox[i].name === ">"){
      picCounter++;
      if (picCounter === picRay.length){
        picCounter = 0;}
        $("#pic").attr("src", picRay[picCounter].src);
        controlBox[7].url = (picRay[picCounter].lnk);
        $("#link").text(picRay[picCounter].name);
      };
      if(controlBox[i].name === "<"){
        picCounter--;
        if (picCounter < 0){
          picCounter = picRay.length-1;}
          $("#pic").attr("src" , picRay[picCounter].src);
          controlBox[7].url = (picRay[picCounter].lnk);
          $("#link").text(picRay[picCounter].name);

        }


      };

    };
    player.x += player.velX;
    player.y += player.velY;

    context.fill();


//draw cloud
context.fillStyle = "white"
context.fillRect(cloud.x,cloud.y,cloud.width,cloud.height)
var dir = colCheck(player,cloud);
if (dir === "l" || dir === "r"){
  player.velX = 0;
  player.jumping = false;
}else if (dir === "b"){
  player.grounded = true;
  player.jumping = false;
  player.x = player.x+1
} else if (dir === "t") {
  player.velY *= -1;
};
if(player.grounded){
  player.velY = 0;
}

//draw cloud bg
for (i=0; i<cloudBg.length; i++){
  context.fillRect(cloudBg[i].x,cloudBg[i].y,cloudBg[i].width,cloudBg[i].height)
};

//no collide blocks      
context.fillStyle = "DarkGray";
for (i=0; i<noCollide.length; i++){
context.fillRect(noCollide[i].x, noCollide[i].y, 20, 20)
};

//! line
context.fillRect(1120+68,25,20,100);
//! dot
context.fillRect(1120+68,145,20,60);

context.fillStyle = "red";
context.font = "bold 6px courier"
context.fillText("score",1120+69,44);
context.fillStyle = "DarkGray";
context.font = "bold 30px courier"
context.fillText("It's",20,40)
//draw score line
line = {
  x:1120+68,
  y:45,
  width:20,
  height:1
}
context.fillRect(line.x,line.y,line.width,line.height);
var pt = colCheck(player,line);
if (pt === "b"){
  player.y = player.y+9
  points = points+1
}

// display score
if(points>0){
  Score();
}

///////////////////////////draw BAD GUY block & attach collision
if(badGuy.dead === false){
  if (badGuy.jump === 122){
    badGuy.jump = 0;
  }

  /////Tiger Leap
  if(badGuy.jump>=80 && badGuy.jump<=100){
    badGuy.x= badGuy.x + badGuy.velX*2;
    badGuy.y= badGuy.y - 2
    badGuy.jump = badGuy.jump+1
  }else if(badGuy.jump>100 && badGuy.jump <=121){
    badGuy.x= badGuy.x + badGuy.velX*2;
    badGuy.y= badGuy.y + 2
    badGuy.jump = badGuy.jump +1
  }else{
    badGuy.x= badGuy.x + badGuy.velX;
    badGuy.jump = badGuy.jump + 1
  }

  if(badGuy.x > 1320){
    badGuy.dir = "L"
  }
  if(badGuy.x < -13){
    badGuy.dir = "R"

  }
  if(badGuy.dir === "R"){
    badGuy.skin = badGuy.skinR
    badGuy.velX = 3
  }else{
    badGuy.skin = badGuy.skinL
    badGuy.velX = -3
  };
  
  context.drawImage(badGuy.skin, badGuy.x, badGuy.y, badGuy.width, badGuy.height)
  var dir = colCheck(player,badGuy);
  if ( dir === "l" || dir === "r"){
    if(game.mode === "hard" && player.onTiger === false){
      player.jumping = false;
      Die();
    }
  }else if (dir === "b"){
    player.grounded = true;
    player.jumping = false;

  } else if (dir === "t") {
    if(game.mode === "hard"){
      player.velY *= -1;
      Die();
    };
  };

//Crate Badguy collision
for(k=0; k<crates.length; k++){
var dir2 = colCheck(crates[k],badGuy);
  if ( dir2 === "l"){
    badGuy.dir = "L"
    console.log(this)
  }else if (dir2 === "r"){
    badGuy.dir = "R"

  } else if (dir2 === "t") {
  console.log("dead tiger")
  };
};
};

//put skin on players

if (game.over === true){
  Lose();
}else if(player.dead === 0){
  context.drawImage(player.skin,player.x, player.y, player.width, player.height) 
}else{
  Die();
}
  /////tigerride!
  if(player.x >= badGuy.x && player.x <= badGuy.x+24 && player.y < badGuy.y-3 && player.y >= badGuy.y-18){
    player.onTiger = true;
    player.grounded = true;
    player.x = badGuy.x ;
    player.velY = badGuy.velY;
  }else{
    player.onTiger = false;
  }
//moving box/player interaction
if(player.x >= cloud.x-15 && player.x <= cloud.x+15 && player.y <= cloud.y && player.y >= cloud.y-14){
  player.x = player.x + 1
};


// display lives
for (i=0; i<lives.length; i++){
  context.fillStyle = "Red";
  context.fillRect(lives[i].x,lives[i].y,lives[i].width,lives[i].height)
};

context.fillStyle = "slateGray";
//draw elevator
for (i=0; i<elevator.length; i++)
  {
    context.fillRect(elevator[i].x,elevator[i].y,elevator[i].width,elevator[i].height);
    elevator[i].y = elevator[i].y + elevator[i].dir
    

    if(elevator[i].y >= elevator[i].yEnd && elevator[i].timer<70){
      elevator[i].dir=0;
      elevator[i].timer = elevator[i].timer+1
    }else if (elevator[i].y >= elevator[i].yEnd && elevator[i].timer===70){
      elevator[i].dir= -2;
      elevator[i].timer = 0
    };



    if(elevator[i].y <= elevator[i].yStart){
      elevator[i].dir = 2
    }
    var dir = colCheck(player, elevator[i]);
    if (dir === "l" || dir === "r"){
      player.velX = 0;
      player.jumping = false;
    }else if (dir === "b"){
      player.grounded = true;
      player.velY = elevator[i].dir
      player.jumping = false;
    } 
    else if (dir === "t" && player.y <= 738) {
      player.velY *= gravity;
    } 
    else if (dir === "t" && player.y === 742) {
      elevator[i].dir = -2;
      player.x = 1320;
      player.y = 221;
      player.dead = 1
    };
    var dir1 = colCheck(player, elevator[i]);
    if (dir1 === "l" || dir1 === "r"){
      badGuy.velX = 0;
    }else if (dir1 === "b"){
      badGuy.grounded = true;
      badGuy.velY = elevator[i].dir
    }
    else if (dir1 === "t") {
      elevator[i].dir = -2;
      // alert("Tiger Smashed!")
  };


for(l=0;l<crates.length;l++){
  var dir1 = colCheck(crates[l],elevator[i]);
  if ( dir1 === "b"){
    crates[l].velY= elevator[i].dir
  }else if (dir1 === "t"){
    elevator[i].dir = -2;
  }else {crates[l].velY = 3
  };
};
};


// display game over
if (lives.length === 0){
  context.fillstyle = "Red";
  Lose();
}





requestAnimationFrame(update);
}
///////check collision
function colCheck(shapeA, shapeB) {
  var vX = (shapeA.x + (shapeA.width/2)) - (shapeB.x + (shapeB.width/2)),
  // the midPointX of shape A minus the midPointX of shape B
  vY =(shapeA.y + (shapeA.height/2))-(shapeB.y + (shapeB.height/2)),
  // the midPointY of shape A minus the midPointY of shape B
  hWidths = (shapeA.width/2) + (shapeB.width/2), 
  // add the two half widths together
  hHeights = (shapeA.height/2) + (shapeB.height/2),
  //add the two half heights together
  colDir = null;

  if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {         
      // figures out on which side its colliding (top, bottom, left, or right)         
      var oX = hWidths - Math.abs(vX),             
      oY = hHeights - Math.abs(vY);         
      if (oX >= oY) {
        if (vY > 0) {
          colDir = "t";
          shapeA.y += oY;
        } else {
          colDir = "b";
          shapeA.y -= oY;
        }
      } else {
        if (vX > 0) {
          colDir = "l";
          shapeA.x += oX+.5;
        } else {
          colDir = "r";
          shapeA.x -= oX+.5;
        }
      }
    }
    return colDir;

  }
//show easy mode 
$('#easy').click(function(){
  if(game.mode==="hard"){
    game.mode = "easy"
  }else{game.mode = "hard"
  console.log("hard mode")
};
$("#grayBox").toggleClass('hide')
$("#easy").toggleClass('easyOn')
$("#background").toggleClass("easy");
});

    ///////////////////////////easy mode
    $('#art').click(function(){
      controlBox[3].active = true
      controlBox[2].active = false
      controlBox[4].active = false
      picCounter = 1;
      picRay = artPic;
      $("#pic").attr("src", picRay[picCounter].src);
      $("#easyLink").attr("href", picRay[picCounter].lnk);
      $("#easyLink").text(picRay[picCounter].name);
    });
    $('#ads').click(function(){
      controlBox[4].active = true
      controlBox[2].active = false
      controlBox[3].active = false
      picCounter = 1;
      picRay = adPic;
      $("#pic").attr("src", picRay[picCounter].src);
      $("#easyLink").attr("href", picRay[picCounter].lnk);
      $("#easyLink").text(picRay[picCounter].name);
    });
    $('#web').click(function(){
      controlBox[2].active = true
      controlBox[4].active = false
      controlBox[3].active = false
      picCounter = 1;
      picRay = projPic;
      $("#pic").attr("src", picRay[picCounter].src);
      $("#easyLink").attr("href", picRay[picCounter].lnk);
      $("#easyLink").text(picRay[picCounter].name);
    });

      ///////////////////////////easy slide directional buttons
      $('#F').click(function(){
        picCounter++;
        if (picCounter === picRay.length){
          picCounter = 0;
        }
        $("#pic").attr("src", picRay[picCounter].src);
        $("#easyLink").attr("href", picRay[picCounter].lnk);
        $("#easyLink").text(picRay[picCounter].name);
      });

      $('#B').click(function(){
        picCounter--;
        if (picCounter < 0){
          picCounter = picRay.length-1;
        }
        $("#pic").attr("src" , picRay[picCounter].src);
        $("#easyLink").attr("href", picRay[picCounter].lnk);
        $("#easyLink").text(picRay[picCounter].name);


      });


      ///hard mode alert 
      if(game.mode === "hard"){$('canvas').click(function(){
        alert("HARD MODE ACTIVE. \nUse the ARROW KEYS to move the player around \nUse UP or SPACE to jump  \nOR switch to EASY MODE with the button on the left")
      })}


        document.body.addEventListener("keydown", function(e) {
          keys[e.keyCode] = true;
        });

        document.body.addEventListener("keyup", function(e) {
          keys[e.keyCode] = false;
        });

        window.addEventListener("load",function(){
          update();
        });



//         for(i=0; i<random.length;i++){
//   pic=""
// $.ajax({
//   url: 'https://randomuser.me/api/',
//   dataType: 'json',
//   success: function(data){
//     pic = data.results[0].user.picture.large
//       random[i].src=pic
//   }
// });

// }
