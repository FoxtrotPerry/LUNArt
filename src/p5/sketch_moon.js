var skyX = 400;
var skyY = 400;
var moonDia = 200;
var shadow=0;
var phase=0;
var divisions;
var numPhases = 8;
var apiMoonPhase, nextPhase, phase, daysToPhase,moonQuarter;
var today;


function preload() {
	var url1 = 'http://api.usno.navy.mil/moon/phase?date=';
	var url2 = '&nump=1';
	today=day();
  apiMoon = loadJSON(url1 + month() + '/' + today+ '/' + year() + url2);
  println(url1 + month() + '/' + today+ '/' + year() + url2);
}

function setup() {
	createCanvas(skyX, skyY);
	nextPhase = split(apiMoon.phasedata[0].date," ");
	moonQuarter = apiMoon.phasedata[0].phase;
  nextPhase = int(nextPhase[2]);
  //there is an error here, it assumes months have 30 days (not 31 or just 28)
	if (nextPhase<10 && today>20){
		nextPhase+=30;
	}
	daysToPhase=nextPhase-today;
	moonQuarters();
}

function draw() {
	background(10);
	ellipseMode(CENTER);
	//arcMode(CENTER);
	
	fill(255, 247, 220);
	ellipse(skyX / 2, skyY / 2, moonDia, moonDia);
	
	fill(10);
	moonPhases();
}

function moonPhases(){
	if(phase==0){//NEW MOON
		arc(skyX/2, skyY/2,moonDia, moonDia,HALF_PI,HALF_PI+PI);
		arc(skyX/2, skyY/2,moonDia, moonDia, HALF_PI+PI,HALF_PI);
	}
	if(phase==1){
		arc(skyX/2, skyY/2,moonDia*3/4, moonDia,HALF_PI,HALF_PI+PI);
		arc(skyX/2, skyY/2,moonDia, moonDia, HALF_PI+PI,HALF_PI);
	}
	if(phase==2){
		arc(skyX/2, skyY/2,moonDia*2/4, moonDia,HALF_PI,HALF_PI+PI);
		arc(skyX/2, skyY/2,moonDia, moonDia, HALF_PI+PI,HALF_PI);
	}
	if(phase==3){
		arc(skyX/2, skyY/2,moonDia*1/4, moonDia,HALF_PI,HALF_PI+PI);
		arc(skyX/2, skyY/2,moonDia, moonDia, HALF_PI+PI,HALF_PI);
	}
	
	if(phase==4){//First Quarter
		arc(skyX/2, skyY/2,moonDia, moonDia, HALF_PI+PI,HALF_PI);
	}
	
	if(phase==5){
		arc(skyX/2, skyY/2,moonDia, moonDia,HALF_PI+PI,HALF_PI);
		fill(255, 247, 220);
		arc(skyX/2, skyY/2,moonDia*1/4, moonDia, HALF_PI+PI,HALF_PI);
	}
	
	if(phase==6){
		arc(skyX/2, skyY/2,moonDia, moonDia,HALF_PI+PI,HALF_PI);
		fill(255, 247, 220);
		arc(skyX/2, skyY/2,moonDia*2/4, moonDia, HALF_PI+PI,HALF_PI);
	}
	
	if(phase==7){
		arc(skyX/2, skyY/2,moonDia, moonDia,HALF_PI+PI,HALF_PI);
		fill(255, 247, 220);
		arc(skyX/2, skyY/2,moonDia*3/4, moonDia, HALF_PI+PI,HALF_PI);	
	}
	
	//phase=8=fullmoon, do nothing
	
	if(phase==9){
		arc(skyX/2, skyY/2,moonDia, moonDia,HALF_PI,HALF_PI+PI);
		fill(255, 247, 220);
		arc(skyX/2, skyY/2,moonDia*3/4, moonDia, HALF_PI,HALF_PI+PI);	
	}
	
	if(phase==10){
		arc(skyX/2, skyY/2,moonDia, moonDia,HALF_PI,HALF_PI+PI);
		fill(255, 247, 220);
		arc(skyX/2, skyY/2,moonDia*2/4, moonDia, HALF_PI,HALF_PI+PI);	
	}
	
	if(phase==11){
		arc(skyX/2, skyY/2,moonDia, moonDia,HALF_PI,HALF_PI+PI);
		fill(255, 247, 220);
		arc(skyX/2, skyY/2,moonDia*1/4, moonDia, HALF_PI,HALF_PI+PI);	
	}
	if(phase==12){//Last Quarter
		arc(skyX/2, skyY/2,moonDia, moonDia,HALF_PI,HALF_PI+PI);
	}
	if(phase==13){
		arc(skyX/2, skyY/2,moonDia*1/4, moonDia,HALF_PI+PI,HALF_PI);
		arc(skyX/2, skyY/2,moonDia, moonDia, HALF_PI,HALF_PI+PI);
	}
	if(phase==14){
		arc(skyX/2, skyY/2,moonDia*2/4, moonDia,HALF_PI+PI,HALF_PI);
		arc(skyX/2, skyY/2,moonDia, moonDia, HALF_PI,HALF_PI+PI);
	}
	if(phase==15){
		arc(skyX/2, skyY/2,moonDia*3/4, moonDia,HALF_PI+PI,HALF_PI);
		arc(skyX/2, skyY/2,moonDia, moonDia, HALF_PI,HALF_PI+PI);
	}
}

// function keyPressed(){
// 	if (keyCode === LEFT_ARROW) {
//     phase++;
// 	}
// 	else if (keyCode === RIGHT_ARROW) {
// 		phase--;
// 	}
// 	if(phase<0){
// 		phase=15;
// 	}
// 	if(phase>15){
// 		phase=0;
// 	}
// }

function moonQuarters(){
	if (moonQuarter=='New Moon'){
		phase=0-daysToPhase;
	}
	if (moonQuarter=='First Quarter'){
		phase=4-daysToPhase;
	}
	if (moonQuarter=='Full Moon'){
		phase=8-daysToPhase;
	}
		if (moonQuarter=='Last Quarter'){
		phase=12-daysToPhase;
	}
}