img="";
statusa="";
ans=[];

function preload() {
    img=loadImage("https://img.freepik.com/free-photo/mockup-tv-wall-mounted-living-room-room-with-white-wall-3d-rendering_41470-3279.jpg?size=626&ext=jpg");
}

function setup() {
    canvas=createCanvas(640,420);
    canvas.center();
    od=ml5.objectDetector("cocossd",modalLoaded);
}

function draw() {
    image(img,0,0,640,420);
    if(statusa!=""){
        for(i=0;i<ans.length; i++){
            document.getElementById("status").innerHTML=" Detection in Progress...";
            fill(0,0,0);
            percent=floor(ans[i].confidence*100);
            text(ans[i].label+ " "+percent+"% ", ans[i].x,ans[i].y);
            noFill();
            stroke(0,0,0);
            //console.log(ans[i].x/2);
            rect(ans[i].x,ans[i].y,ans[i].width,ans[i].height);
            document.getElementById("status").innerHTML=" Detection Completed!";
        }
    }
}

function modalLoaded() {
    statusa=true;
    console.log("modal is loaded");
    od.detect(img,gotResults);
}

function gotResults(error,results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        ans=results;
    }
}

function back() {
    window.location="index.html";
}