# Orbital Mechanics Simulation with Data Visualization

January 2020

## Game Purpose

This is a simulation for orbital gravitational pulls and data visualization helping to increase interest in whatever statistic is presented, along with increasing interest in the sciences.  The physics engine, graphics, and servers are all made by hand using node and html canvas by our team in our goal of increasing interest in science and statistics through the use of interactive games.  

## Our API

The product connects to our backend server we designed using data found from  SteamCommunity.com where we gathered the playtime of the most popular games and stored them in a CSV file.

The API itself can return random data from that CSV file to give random game titles and hours played to our game to keep it interesting.

The webscraper uses libraries Requests, Beautiful soup, and pandas to run this script. Starts by using requests library to get permission from steam website to get HTML code. Then uses BeautifulSoup library to parse the HTML from the website. Finally pandas library organizes the data into specific columns and rows.

## Authors

[Gavin Magee](https://github.com/GavinTMagee), 
[Reza Asayesh](https://github.com/RMA-source), 
[Andrew Raftovich](https://github.com/Kalatco), 
[Robbie Bagley](https://github.com/kansairob) 

## Team (except tall man in center)

![Pros](https://github.com/Kalatco/HackAZ-2020/blob/master/team1.jpg)
![T-posing](https://github.com/Kalatco/HackAZ-2020/blob/master/team2.jpg)

## Dependencies

Node.js, Express.js
