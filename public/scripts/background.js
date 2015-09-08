//obsticle boxes
var cssImg=document.getElementById("css");
var adobeImg=document.getElementById("adobe");
var htmlImg=document.getElementById("html");
var jsImg=document.getElementById("js");
var jqueryImg=document.getElementById("jquery")
var backImg=document.getElementById("back")

width = 1400;
height = $("#canvas").css("height");
boxes = [];
controlBox = [];
lives = [];
elevator = [];
cloudBg = [];
noCollide=[];

crates = [];

crates.push({
  x: 900,
  y: 325,
  velY:3,
  width:25,
  height:25,
  grounded:true,
  skin: cssImg,
  name: "css"
});
// crates.push({
//   x: 1100,
//   y: 325,
//   velY:3,
//   width:25,
//   height:25,
//   grounded:true,
//   skin: adobeImg,
//   name: "adobe"
// });
crates.push({
  x: 700,
  y: 325,
  velY:3,
  width:25,
  height:25,
  grounded:true,
  skin: htmlImg,
  name: "html"
});

// crates.push({
//   x: 800,
//   y: 325,
//   velY:3,
//   width:25,
//   height:25,
//   grounded:true,
//   skin: backImg,
//   name: "backbone"
// });
// crates.push({
//   x: 700,
//   y: 325,
//   velY:3,
//   width:25,
//   height:25,
//   grounded:true,
//   skin: jqueryImg,
//   name: "jquery"
// });
crates.push({
  x: 500,
  y: 325,
  velY:3,
  width:25,
  height:25,
  grounded:true,
  skin: jsImg,
  name: "js"
});

boxes.push({
  x:-32,
  y: 750,
  width:1400,
  height:500
});
//Bottom floor///////////////////////////////
boxes.push({
  x:0,
  y: 750,
  width:width,
  height:height
});
// second floor//////////////////////////////
boxes.push({
  x:90+68,
  y: 355,
  width:1100,
  height: 10
});
boxes.push({
  x:-68+68,
  y: 355,
  width:80,
  height: 10
});
boxes.push({
  x:1300,
  y: 355,
  width:36,
  height: 10
});

//link box sign posts
boxes.push({
  x:1040+68,
  y: 365,
  width:10,
  height: 20
});
boxes.push({
  x:1140+68,
  y: 365,
  width:10,
  height: 20
});


// rooftop////////////////////////////////
boxes.push({
  x:590+68,
  y: 235,
  width:600,
  height: 10
});
boxes.push({
  x:90+68,
  y: 235,
  width:400,
  height: 10
});
boxes.push({
  x:-68+68,
  y: 235,
  width:80,
  height: 10
});
boxes.push({
  x:1300,
  y: 235,
  width:36,
  height: 10
});
// external link sign posts
boxes.push({
  x:235,
  y: 245,
  width:5,
  height: 20
});

boxes.push({
  x:355,
  y: 245,
  width:5,
  height: 20
});

boxes.push({
  x:475,
  y: 245,
  width:5,
  height: 20
});

boxes.push({
  x:1088,
  y: 495,
  width:150,
  height: 10
});

//slideshow sign posts 3
boxes.push({
  x:1040+68,
  y: 245,
  width:10,
  height: 20
});
boxes.push({
  x:1140+68,
  y: 245,
  width:10,
  height: 20
});

//slideshow sign posts 2
boxes.push({
  x:840+68,
  y: 245,
  width:10,
  height: 20
});
boxes.push({
  x:940+68,
  y: 245,
  width:10,
  height: 20
});

//slideshow sign posts 1
boxes.push({
  x:740+68,
  y: 245,
  width:10,
  height: 20
});
boxes.push({
  x:640+68,
  y: 245,
  width:10,
  height: 20
});

///obsticle boxes

//N
boxes.push({
  x: 40+68,
  y: 25,
  width: 20,
  height: 180
});

boxes.push({
  x: 60+68,
  y: 45,
  width: 20,
  height: 20
});
boxes.push({
  x: 80+68,
  y: 65,
  width: 20,
  height: 20
});
boxes.push({
  x: 100+68,
  y: 85,
  width: 20,
  height: 20
});
boxes.push({
  x: 120+68,
  y: 105,
  width: 20,
  height: 20
});
boxes.push({
  x: 140+68,
  y: 125,
  width: 20,
  height: 20
});
boxes.push({
  x: 160+68,
  y: 145,
  width: 20,
  height: 20
});

boxes.push({
  x: 180+68,
  y: 25,
  width: 20,
  height: 100
});
boxes.push({
  x: 180+68,
  y: 145,
  width: 20,
  height: 60
});
//A
boxes.push({
  x: 220+68,
  y: 65,
  width: 20,
  height: 140
});
boxes.push({
  x: 240+68,
  y: 105,
  width: 60,
  height: 20
});
boxes.push({
  x: 240+68,
  y: 45,
  width: 20,
  height: 20
});
boxes.push({
  x: 300+68,
  y: 65,
  width: 20,
  height: 60
});
boxes.push({
  x: 300+68,
  y: 145,
  width: 20,
  height: 60
});

boxes.push({
  x: 260+68,
  y: 25,
  width: 20,
  height: 20
});
//T
boxes.push({
  x: 320+68,
  y: 25,
  width: 60,
  height: 20
});
boxes.push({
  x: 400+68,
  y: 25,
  width: 20,
  height: 20
});
boxes.push({
  x: 360+68,
  y: 45,
  width: 20,
  height: 40
});
boxes.push({
  x: 360+68,
  y: 105,
  width: 20,
  height: 100
});
//S
boxes.push({
  x: 480+68,
  y: 45,
  width: 20,
  height: 40
});
boxes.push({
  x: 500+68,
  y: 25,
  width: 80,
  height: 20
});
boxes.push({
  x: 580+68,
  y: 45,
  width: 20,
  height: 20
});
boxes.push({
  x: 520+68,
  y: 105,
  width: 40,
  height: 20
});
boxes.push({
  x: 560+68,
  y: 125,
  width: 20,
  height: 20
});
boxes.push({
  x: 580+68,
  y: 145,
  width: 20,
  height: 40
});
boxes.push({
  x: 500+68,
  y: 185,
  width: 80,
  height: 20
});
boxes.push({
  x: 480+68,
  y: 165,
  width: 20,
  height: 20
});
//C
boxes.push({
  x: 620+68,
  y: 45,
  width: 20,
  height: 80
});
boxes.push({
  x: 620+68,
  y: 145,
  width: 20,
  height: 40
});
boxes.push({
  x: 640+68,
  y: 185,
  width: 60,
  height: 20
});
boxes.push({
  x: 700+68,
  y: 165,
  width: 20,
  height: 20
});
boxes.push({
  x: 640+68,
  y: 25,
  width: 60,
  height: 20
});
boxes.push({
  x: 700+68,
  y: 45,
  width: 20,
  height: 20
});
//O
boxes.push({
  x: 740+68,
  y: 45,
  width: 20,
  height: 60
});
boxes.push({
  x: 740+68,
  y: 125,
  width: 20,
  height: 60
});
boxes.push({
  x: 760+68,
  y: 25,
  width: 40,
  height: 20
});
boxes.push({
  x: 760+68,
  y: 185,
  width: 60,
  height: 20
});
boxes.push({
  x: 820+68,
  y: 45,
  width: 20,
  height: 20
});
boxes.push({
  x: 820+68,
  y: 85,
  width: 20,
  height: 100
});
//T
boxes.push({
  x: 860+68,
  y: 25,
  width: 60,
  height: 20
});
boxes.push({
  x: 940+68,
  y: 25,
  width: 20,
  height: 20
});
boxes.push({
  x: 900+68,
  y: 45,
  width: 20,
  height: 80
});
boxes.push({
  x: 900+68,
  y: 145,
  width: 20,
  height: 60
});
//T
boxes.push({
  x: 980+68,
  y: 25,
  width: 100,
  height: 20
});
boxes.push({
  x: 1060+68,
  y: 25,
  width: 20,
  height: 20
});
boxes.push({
  x: 1020+68,
  y: 45,
  width: 20,
  height: 40
});
boxes.push({
  x: 1020+68,
  y: 105,
  width: 20,
  height: 100
});
//!
boxes.push({
  x:1100+68,
  y:25,
  width:20,
  height:100
})
boxes.push({
  x:1140+68,
  y:25,
  width:20,
  height:100
})
boxes.push({
  x:1100+68,
  y:145,
  width:20,
  height:60
})
boxes.push({
  x:1140+68,
  y:145,
  width:20,
  height:60
})

//////control boxes

// 0 forward box
controlBox.push({
  x:1008,
  y:600,
  org:600,
  width:60,
  height:60,
  color:"slateGray",
  color2:"slateGray",
  colorO:"slateGray",
  name:">",
  xName:1033,
  yName:635,
  yNameOrg:635,
  font:"bold 20px courier"
});

//1 back box
controlBox.push({
  x:248,
  y:600,
  org:600,
  width:60,
  height:60,
  color:"slateGray",
  color2:"slateGray",
  colorO:"slateGray",
  active:false,
  name:"<",
  xName:270,
  yName:635,
  yNameOrg:635,
  font:"bold 20px courier"
});
// 2 slideshow box 1
controlBox.push({
  x:688,
  y: 265,
  org:265,
  width:150,
  height: 30,
  color:"slateGray",
  color2:"white",
  colorO:"slateGray",
  active:false,
  name:"Web",
  xName:742,
  yName:285,
  yNameOrg:285,
  font:"bold 20px courier"
});

// 3 slideshow box 2
controlBox.push({
  x:888,
  y: 265,
  org:265,
  width:150,
  height: 30,
  color:"slateGray",
  color2:"white",
  colorO:"slateGray",
  active:false,
  name:"Art",
  xName:944,
  yName:285,
  yNameOrg:285,
  font:"bold 20px courier"
});

//4 slideshow box 3
controlBox.push({
  x:1088,
  y: 265,
  org:265,
  width:150,
  height: 30,
  color:"slateGray",
  color2:"white",
  colorO:"slateGray",
  active:false,
  name:"Ads",
  xName:1143,
  yName:285,
  yNameOrg:285,
  font:"bold 20px courier"
});

//5 external link box
controlBox.push({
  x:188,
  y: 255,
  org:255,
  width:100,
  height: 20,
  type: "link",
  color:"slateGray",
  color2:"slateGray",
  colorO:"slateGray",
  active:false,
  name:"linkedIn",
  xName:200,
  yName:269,
  yNameOrg:269,
  font:"bold 16px courier",
  url: "http://www.linkedin.com/in/brewsterscott"
});
//6 external link box
controlBox.push({
  x:308,
  y: 255,
  org:255,
  width:100,
  height: 20,
  type: "link",
  color:"slateGray",
  color2:"slateGray",
  colorO:"slateGray",
  active:false,
  name:"gitHub",
  xName:329,
  yName:269,
  yNameOrg:269,
  font:"bold 16px courier",
  url: "http://www.github.com/itsnatscott?tab=repositories"
});
//7 external link box
controlBox.push({
  x:428,
  y: 255,
  org:255,
  width:100,
  height: 20,
  type: "link",
  color:"slateGray",
  color2:"slateGray",
  colorO:"slateGray",
  active:false,
  name:"resume",
  xName:449,
  yName:269,
  yNameOrg:269,
  font:"bold 16px courier",
  url: "http://itsnatscott.com/public/images/BrewsterNScott_Resume.pdf"
});

/// 8 slideShow linkbox
controlBox.push({
  x:1020+68, 
  y: 385, 
  org:385,
  width:150,
  height: 60,
  type: "link",
  color:"slateGray",
  color2:"slateGray",
  colorO:"slateGray",
  active:false,
  name:"Link",
  xName:1133,
  yName:420,
  yNameOrg:420,
  font:"bold 24px courier",
  url: ""
});


///lives
lives.push({
  x:1318,
  y:5,
  width:3,
  height:7
});

lives.push({
  x:1313,
  y:5,
  width:3,
  height:7
});

lives.push({
  x:1308,
  y:5,
  width:3,
  height:7
});

//elevator box array
var elevator = []
elevator.push({
  x:85,
  y:235,
  width:68,
  height:15,
  dir: -2,
  yStart:235,
  yEnd:748,
  timer:0
});

elevator.push({
  x:1265,
  y:355,
  width:28,
  height:15,
  dir: -2,
  yStart:355,
  yEnd:748,
  timer:0
});

//cloud
//cloud
cloud = {
  x:0,
  y:19,
  width:30,
  height:3
}
//cloud bg

cloudBg.push({
  x:2,
  orgX:2,
  y:16,
  width:26,
  height:3
});
cloudBg.push({
  x:4,
  orgX:4,
  y:13,
  width:20,
  height:3
});
cloudBg.push({
  x:5,
  orgX:5,
  y:10,
  width:3,
  height:3
});
cloudBg.push({
  x:19,
  orgX:19,
  y:11,
  width:2,
  height:2
});

//N
noCollide.push({x:180+68, y: 125});
//A
noCollide.push({x:300+68, y: 125});
noCollide.push({x:280+68, y: 45});
//T
noCollide.push({x:380+68, y: 25});
noCollide.push({x:360+68, y: 85});
//S
noCollide.push({x:500+68, y: 85});
//C
noCollide.push({x:620+68, y: 125});
//O
noCollide.push({x:800+68, y: 25});
noCollide.push({x:740+68, y: 105});
noCollide.push({x:820+68, y: 65});;
//T
noCollide.push({x:900+68, y: 125});
noCollide.push({x:920+68, y: 25});;
//T
noCollide.push({x:1020+68, y: 85});

