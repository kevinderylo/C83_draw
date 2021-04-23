canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");
var width=screen.width;
if(width<992){
    new_width=screen.width-70;
    new_height=screen.height-300;
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}
var last_position_x, last_position_y;
console.log("loaded file");
color="grey";
width=2;
//mouse down block + to get color and width from user
canvas.addEventListener("touchStart", my_touchStart);

function my_touchStart(e){
    console.log("touch");
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    last_position_x=e.touches[0].clientX-canvas.offsetLeft;
    last_position_y=e.touches[0].clientY-canvas.offsetTop;
}
//mouse move, mouse move + mouse down
canvas.addEventListener("touchmove", my_touchMove);

function my_touchMove(e){

    current_position_X=e.touches[0].clientX-canvas.offsetLeft;
    current_position_Y=e.touches[0].clientY-canvas.offsetTop;
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;

        console.log("last Position of x and y coordinates are "+ last_position_x +" and " + last_position_y);
        ctx.moveTo(last_position_x, last_position_y);

        console.log("Current Position of x and y coordinates are "+ current_position_X +" and " + current_position_Y);
        ctx.lineTo(current_position_X, current_position_Y);
        ctx.stroke();

    last_position_x = current_position_X;
    last_position_y = current_position_Y;
    console.log(color);
}