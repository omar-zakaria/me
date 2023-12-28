import { useEffect, useRef } from "react";

export default function ZBubbleCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    var circles = [
        { x: 75, y: 90, radius: 50, label: "REST", text: "This technology was used in these projects" },
        { x: 100, y: 400, radius: 70, label: "Azure Service Bus", text: "abc" },
        { x: 200, y: 200, radius: 70, label: "AWS Cloudfront", text: "abc" },
        { x: 250, y: 600, radius: 100, label: "Azure Cognitive Services", text: "abc" },
        { x: 300, y: 350, radius: 50, label: "SOLID", text: "abc" },
        { x: 400, y: 120, radius: 30, label: "DDD", text: "abc" },
        { x: 430, y: 550, radius: 60, label: "Visual Studio", text: "abc" },
        { x: 510, y: 730, radius: 30, label: "Agile", text: "abc" },
        { x: 620, y: 330, radius: 30, label: "Jira", text: "abc" },
        { x: 700, y: 600, radius: 50, label: "Confluence", text: "abc" },
        { x: 800, y: 150, radius: 70, label: "Azure Devops", text: "abc" },
        { x: 830, y: 450, radius: 30, label: "Docker", text: "abc" },
        { x: 910, y: 630, radius: 50, label: "Kubernetes", text: "abc" },
        { x: 1020, y: 300, radius: 110, label: "Vertical Slices Architecture", text: "abc" },
        { x: 1100, y: 570, radius: 30, label: "NestJs", text: "abc" },
        { x: 1200, y: 290, radius: 30, label: "Next.js", text: "abc" },
        { x: 1270, y: 90, radius: 70, label: "Entity Framework", text: "abc" },
        { x: 1340, y: 600, radius: 30, label: "Git", text: "abc" }
    ];

    function inSpacesTaken(spaces, x, y, radius) {

        //(    0  (  )  0   )
        var result = spaces.filter(s =>
            ((x + radius > s[0] && x + radius < s[1]) || (x - radius > s[0] && x - radius < s[1])) &&
            ((y + radius > s[2] && y + radius < s[3]) || (y - radius > s[2] && y - radius < s[3])))

        if (result.length > 0) {
            return true
        }
        return false;
    }

    function randomizeAll(circles, XMax, YMax) {
        const spacesTaken: any[] = [];

        circles.forEach(c => {
            c.radius = Math.ceil(Math.random() * 3) * 20 + 30

            c.x = Math.ceil(Math.random() * (XMax - 2 * c.radius)) + c.radius
            c.y = Math.ceil(Math.random() * (YMax - 2 * c.radius)) + c.radius

            while (inSpacesTaken(spacesTaken, c.x, c.y, c.radius)) {
                c.x = Math.ceil(Math.random() * (XMax - 2 * c.radius)) + c.radius
                c.y = Math.ceil(Math.random() * (YMax - 2 * c.radius)) + c.radius
            }

            spacesTaken.push([c.x - c.radius, c.x + c.radius, c.y - c.radius, c.y + c.radius])
        });
    }

    function drawLine(ctx, x1, y1, x2, y2) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = '#202020';
        ctx.stroke();
    }

    function drawAllLines(ctx) {
        for (var i = 0; i < circles.length; i++) {
            for (var j = i + 1; j < circles.length; j++) {
                if (j > i + 1 && j < i + 4) {
                    drawLine(ctx, circles[i].x, circles[i].y, circles[j].x, circles[j].y);
                }
            }
        }
    }

    function drawCircle(ctx, circle, hover) {
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
        ctx.strokeStyle = '#202020';
        ctx.fillStyle = hover ? '#3730a3' : '#4f46e5';
        ctx.fill();

        ctx.fillStyle = 'white'; // Text color
        ctx.font = '16px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(circle.label, circle.x, circle.y);
    
        if (hover) {

            var textWidth = ctx.measureText(circle.text).width;
            var padding = 10;
            var boxWidth = textWidth + 2 * padding;
            var boxHeight = 30;
            var boxX = circle.x + circle.radius + 10;
            var boxY = circle.y - boxHeight / 2;

            // Draw the rectangle
            ctx.fillStyle = '#707070';
            ctx.fillRect(boxX, boxY, boxWidth, boxHeight);

            // Draw the text inside the rectangle
            ctx.fillStyle = 'white';
            ctx.font = '16px Arial';
            ctx.fillText(circle.text, boxX + padding, boxY + 20);
        }

        ctx.stroke();
    }

    function redrawCircles(ctx, canvas, hoverIndex) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#FCFCFC'
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        drawAllLines(ctx)
        circles.forEach((circle, index) => {
            drawCircle(ctx, circle, index === hoverIndex);
        });
    }

    function isMouseOverCircle(mouseX, mouseY, circle) {
        var dx = mouseX - circle.x;
        var dy = mouseY - circle.y;
        return dx * dx + dy * dy <= circle.radius * circle.radius;
    }


    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas == null) return; // current may be null
        const context = canvas.getContext("2d");
        if (context == null) return; // context may be null

        canvas.addEventListener('mousemove', function (event) {
            var rect = canvas.getBoundingClientRect();
            var mouseX = event.clientX - rect.left;
            var mouseY = event.clientY - rect.top;
            var hoverIndex = -1;

            circles.forEach((circle, index) => {
                if (isMouseOverCircle(mouseX, mouseY, circle)) {
                    hoverIndex = index;
                }
            });

            redrawCircles(context, canvas, hoverIndex);
        });

        redrawCircles(context, canvas, -1);
    }, [drawCircle])


    return (<canvas id="myCanvas" ref={canvasRef} width="1600" height="800" className='border-solid border-2'>
        Your browser does not support the HTML5 canvas tag.
    </canvas>)
}