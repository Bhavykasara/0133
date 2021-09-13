img="";
statusa="";
ans=[];

function preload() {
    //img=loadImage("https://th.bing.com/th/id/OIP.ilkkyRL3ff4I0kIlb735UwHaJm?pid=ImgDet&rs=1");
}

function setup() {
    canvas=createCanvas(640,420);
    canvas.center();

    vedio=createCapture(VIDEO);
    vedio.hide();

    od=ml5.objectDetector("cocossd",modalLoaded);
}

function draw() {
    image(vedio,0,0,640,420);
    if(statusa!=""){
        for(i=0;i<ans.length; i++){
            
            document.getElementById("status").innerHTML=" Detection Completed!";
            fill(0,0,0);
            percent=floor(ans[i].confidence*100);
            text(ans[i].label+ " "+percent+"% ", ans[i].x,ans[i].y);
            noFill();
            stroke(0,0,0);
            //console.log(ans[i].x/2);
            rect(ans[i].x,ans[i].y,ans[i].width,ans[i].height);
        }
    }
}

function modalLoaded() {
    statusa=true;
    console.log("modal is loaded");
    od.detect(vedio,gotResults);
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