<!--# Orbital Mechanics Simulation with Data Visualization-->
# Space Data, The Game

[Click Here to play the game!](https://hackaz2020-space-game.herokuapp.com/)

## Our Team

[Gavin Magee](https://github.com/GavinTMagee)<br/>
[Andrew Raftovich](https://github.com/Kalatco)<br/>
[Reza Asayesh](https://github.com/rasayesh)<br/>
[Robbie Bagley](https://github.com/kansairob)<br/>

## Game Purpose

This is a simulation for orbital gravitational pulls and data visualization helping to increase interest in whatever statistic is presented, along with increasing interest in the sciences.  The physics engine, graphics, and servers are all made by hand using node and html canvas by our team in our goal of increasing interest in science and statistics through the use of interactive games.

In this situation, the game data being displayed is Steam data for top most played games including their total played hours. To win, the user must fly their space ship to the green colored planet.

<kbd>A</kbd> - turn left 
<kbd>D</kbd> - turn right 
<kbd>Spacebar</kbd> - boost 

![video game](https://github.com/Kalatco/HackAZ-2020/blob/master/gamePlay.png)

## Our API

The product connects to our backend server we designed using data found from [SteamCommunity.com](https://steamcommunity.com/) where we gathered the playtime of the most popular games and stored them in a CSV file.

The API itself can return random data from that CSV file to give random game titles and hours played to keep it interesting.

The webscraper uses libraries Requests, Beautiful soup, and pandas to run this script. Starts by using requests library to get permission from steam website to get HTML code. Then uses BeautifulSoup library to parse the HTML from the website. Finally pandas library organizes the data into specific columns and rows.

## Team Photo (except tall man in center)

<p float="left">
<img src="https://github.com/Kalatco/HackAZ-2020/blob/master/team1.jpg" width="400" height="500">
<img src="https://github.com/Kalatco/HackAZ-2020/blob/master/team2.jpg" width="400" height="500">
</p>

## Dependencies

Node.js, Express.js

## Local Usage

1. After the user has downloaded the files from github, open terminal or CMD and open the file directory with the indicated files.
2. Download any dependent file for the program listed below.
3. To start the server, you need to type 'node server.js' into the terminal or CMD.  This will start the server on port 3000.
4. To open the site, go into your prefered browser and go to the address '[http://localhost:3000/](http://localhost:3000/)'.

## Future implementations (TODO)
msg: Before making fixes to the master repo, branch off and make a merge request, give each merge a unique name indicating the fix message.

- [ ] Add [igdb api](https://www.igdb.com/discover) to replace planet colors with an image of the game.
- [ ] Find name for the game.
- [x] Deploy app to Heroku
- [x] Make the game full screen.
- [x] Fix hours displayed to a readable format.
- [ ] Add home page to display instructions for the game.
- [ ] Improve win screen by showing more info about the target game.
- [ ] Fix sizes of planets to better represent number of hours played.
- [ ] Improve delay with new spawn.
- [ ] Improve payer spawn by showing a bigger space ship.
- [ ] Allow to let player choose experimential worlds to practive with orbital mechanics.
- [ ] Check api/random to see if all 5 options are working correctly.
