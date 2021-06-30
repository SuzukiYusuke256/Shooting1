
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// 各種設定
canvas.style.position = 'absolute';
canvas.style.left = '0px';
canvas.style.top = '0px';
// canvas.style.width = '600px';
// canvas.style.height = '450px';

canvas.style.background = '#eee';

ctx.lineWidth = 3;

var length = 50

// draw a rectangle
for(var i = 0; i < 10; i++)
{
    for(var j = 0; j < 5; j++)
    {
        ctx.strokeRect(10+length*i,10+length*j, length, length);
    }
    
}
