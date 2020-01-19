let numPlanets = 10;
(function(){
    let model;

    function drawAll(){
        let canvas = document.getElementById("primarystage");
        let ctx = canvas.getContext("2d");
        let playerImg = document.getElementById("player");
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.drawImage(playerImg, model.player.x, model.player.y, playerImg.width, playerImg.height);
        for (let i = 0; i < model.planets.length; i++){
            ctx.beginPath();
            ctx.arc(model.planets[i].x, model.planets[i].y, model.planets[i].radius, 0, 2 * Math.PI);
            ctx.fillStyle = "green";
            ctx.fill();
        }
    }

    function gameTick(){
        model.updatePlayer();
        drawAll();
    }

    window.onload = function(){
        model = new Model();
        setInterval(gameTick, 10);
    }
})();