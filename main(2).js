img="";
statusa="";
ans=[];

function preload() {
    img=loadImage("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/edc020121toolbox-001-1607447196.jpg");
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
            fill("#8E44AD ");
            percent=floor(ans[i].confidence*100);
            text(ans[i].label+ " "+percent+"% ", ans[i].x,ans[i].y);
            noFill();
            stroke(255,255,255);
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