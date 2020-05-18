# Galactic Breach
An exciting and beautiful side scrolling space arcade-shooter game. Fight off swarms of enemies as you invade the enemy galaxy.

# Demo
Live demo: https://sammygutierrez335.github.io/GalacticBreach/

# Technologies and Technical Challenges
Developed exclusively with JavaScript, HTML5, Canvas, and CSS

* Dynamically rendered sprites with varying sprite frames
* Custom movements of enemies/objects utilizing Object Oriented Programming principles .
* Manipulating HTML 5 Audio via Music/Sfx Toggle
* Writing custom, highly versatile, and reusable collision logic able to handle various parameters at once keeping code DRY and efficient.

# Landing Page

![](README_images/game-menu.png)




# Coding Challenges     
Rendering a smooth background/background transition was initially accomplished using the spawning/respawning of two seperate background images.
However, In order to simulate a progression in the game, the image src had to be modified during gameplay. 
When I attempted to modify the image src solely upon leveling up, it caused the background to change abruptly.
To fix this, I added "backgroundRendering" property that would be set to true upon being place off screen for rerendering 
then immediately being set to false once the image had already been rendered onto the screen. 
Using this property I could then ensure that the image src would only change when the image wasn't visable on the screen.

```javascript 
//waits until a background is about to rerender to replace with new background image.
    if (this.playerLevel > 5 && this.backgroundRendering) {
      this.bgImageSrc= "assets/backgrounds/bg2.png";
    }

    if (this.playerLevel > 5 && this.background2Rendering) {
      this.bgImageSrc2 = "assets/backgrounds/bg2.png";
    }

    if (this.playerLevel > 15 && this.backgroundRendering) {
      this.bgImageSrc = "assets/backgrounds/bg3.png";
    }

    if (this.playerLevel > 15 && this.background2Rendering) {
      this.bgImageSrc2 = "assets/backgrounds/bg3.png";
    }

    // increases this.bgImageX to simulate an increase in player's ship speed.
    ctx.drawImage(bgImage, this.bgImageX -= 5 + this.playerLevel, 0)
    ctx.drawImage(bgImageFlipped, this.bgImageFlippedX -= 5 + this.playerLevel, 0)
    
```

