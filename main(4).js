ans=[];
img="";
statusa=" ";

function preload() {
    img=loadImage("https://images.creativemarket.com/0.1.0/ps/1107484/1360/1020/m1/fpnw/wm1/vk3szrgfaalgg0i5ymxzbl8qymj8cpdtnaszgmemqpvkordzzmiuc38ombjrqnt4-.jpg?1458656355&s=af0062559af452ffbf43d53f393ab41f");
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
            text(ans[i].label+ " "+percent+"% ", ans[i].x/2,ans[i].y/2-(ans[i].height/2/2));
            noFill();
            stroke(0,0,0);
            //console.log(ans[i].x/2);
            rect(ans[i].x/2,ans[i].y/2-(ans[i].height/2/2),ans[i].width/2,ans[i].height/2);
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