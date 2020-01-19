class Model{
    constructor(){
        let canvas = document.getElementById("primarystage");
        this.player = new Player(0, (canvas.height / 2) - (parseInt(document.getElementById("player").height) / 2));
        this.planets = [];
        this.spacePressed = false;
        let i = 0;
        while (i < numPlanets + 1){
            let newPlanet;
            if (i == numPlanets){
                newPlanet = new Planet(Math.random() * (parseInt(canvas.width) - 200) + 200, Math.random() * parseInt(canvas.height), Math.random() * 100 + 20, true);
            }else{
                newPlanet = new Planet(Math.random() * (parseInt(canvas.width) - 200) + 200, Math.random() * parseInt(canvas.height), Math.random() * 100 + 20, false);
            }
            let j = 0;
            let overlap = false;
            while (j < this.planets.length && !overlap){
                if (this.planets[j].radius + newPlanet.radius > this.distance(newPlanet.x,newPlanet.y,this.planets[j].x,this.planets[j].y)){
                    //planets collide so respawn
                    overlap = true;
                }
                j++;
            }
            if (!overlap){
                this.planets.push(newPlanet);
                i++;
            }
        }
    }

    setSpacePressed(status){
        this.spacePressed = status;
    }

    updatePlayer(){
        for (let i = 0; i < this.planets.length; i++){
            let planet = this.planets[i];
            let a = planet.radius / (Math.pow(this.player.x - planet.x, 2) + Math.pow(this.player.y - planet.y, 2));
            let theta = this.getTheta(this.player, planet.x, document.getElementById("primarystage").height - planet.y);

            let va = -1 * a * Math.sin(theta);
            let ha = a * Math.cos(theta);
            this.player.horizontalVelocity += ha;
            this.player.verticalVelocity += va;
        }
        let a = .01;
        if (this.spacePressed){
            this.player.verticalVelocity += -1 * a * Math.sin(this.player.direction);
            this.player.horizontalVelocity += a * Math.cos(this.player.direction);
        }
        this.player.x += this.player.horizontalVelocity;
        this.player.y += this.player.verticalVelocity;

        let playerCenterX = this.player.x + this.player.width / 2;
        let playerCenterY = this.player.y + this.player.height / 2;
        for (let i = 0; i < this.planets.length; i++){
            let planet = this.planets[i];
            if (this.distance(planet.x, planet.y, playerCenterX, playerCenterY) < planet.radius){
                let canvas = document.getElementById("primarystage");
                if (planet.goal){
                    alert("You Won!");
                    location.reload();
                }
                this.player.x = 0;
                this.player.y = (canvas.height / 2) - (parseInt(document.getElementById("player").height) / 2);
                this.player.horizontalVelocity = 0;
                this.player.verticalVelocity = 0;
                this.player.direction = 0;
            }
        }
    }

    getTheta(player, normalizedOtherX, normalizedOtherY){
        let normalizedPlayerX = player.x + player.width / 2;
		let normalizedPlayerY = document.getElementById("primarystage").height - player.y - (player.height / 2);
		let dx = normalizedOtherX - normalizedPlayerX;
		let dy = normalizedOtherY - normalizedPlayerY;
		if (dy == 0) {
			dy += .01;
		}
		if (dx == 0) {
			dx += .01;
		}
		let theta = Math.atan(dy / dx);
		if (dy < 0 && dx < 0) {
			theta += Math.PI;
		} else if (dy > 0 && dx < 0) {
			theta += Math.PI;
		} else if (dy < 0 && dx > 0) {
			theta += 2 * Math.PI;
		}
		return theta;
    }

    distance(x1,y1,x2,y2){
        return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y2 - y1, 2));
    }
}