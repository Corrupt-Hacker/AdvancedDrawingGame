const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = 400;

let ctx = canvas.getContext('2d');
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);

let start_background_color = 'white';
let draw_color = 'black';
let draw_width = '2';
let is_drawing = false;
let restore_array = [];
let index = -1;

function change_color(element)
{
    draw_color = element.style.background;
}

canvas.addEventListener('touchstart', start, false);
canvas.addEventListener('touchmove', draw, false);
canvas.addEventListener('mousedown', start, false);
canvas.addEventListener('mousemove', draw, false);
canvas.addEventListener('touchend', stop, false);
canvas.addEventListener('mouseup', stop, false);
canvas.addEventListener('mouseout', stop, false);

function start(event)
{
    is_drawing = true;
    ctx.beginPath();
    ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    event.preventDefault();
}
function draw(event)
{
    if(is_drawing)
    {
        ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        ctx.strokeStyle = draw_color;
        ctx.lineWidth = draw_width;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.stroke()
    }
    event.preventDefault;
}
function stop(event)
{
    if(is_drawing)
    {
        ctx.stroke();
        ctx.closePath();
        is_drawing = false;
    }
    event.preventDefault;
}
function clear_canvas()
{
    ctx.fillStyle = start_background_color;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    restore_array = [];
    index = -1
}
