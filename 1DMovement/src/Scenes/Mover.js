class Mover extends Phaser.Scene {
    constructor() {
        super("movementScene");
        this.my = {sprite: {}};

        this.playerX = 400;
        this.playerY = 500;

        this.bulletX = this.playerX;
        this.bulletY = this.playerY;

        this.keyA = null;
        this.keyD = null;
        this.spaceKey = null;
    }

    preload()
    {
        this.load.setPath("./assets/");

        this.load.image("player", "shipYellow_manned.png");

        this.load.image("bullet", "laserYellow1.png");

        document.getElementById('description').innerHTML = '<h2>Mover.js<br>A - move left // D - move right<br>Space - shoot</h2>'
    }

    create()
    {
        let my = this.my;
        
        my.sprite.player = this.add.sprite(this.playerX, this.playerY, "player");
        my.sprite.bullet = this.add.sprite(this.bulletX, this.bulletY, "bullet");

        my.sprite.bullet.visible = false;

        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update()
    {
        let my = this.my;

        if(Phaser.Input.Keyboard.JustDown(this.spaceKey))
        {
            if(my.sprite.bullet.visible == false)
            {
                my.sprite.bullet.x = my.sprite.player.x;
                my.sprite.bullet.y = my.sprite.player.y - 25;
                my.sprite.bullet.visible = true;
            }
        }

        if(this.keyA.isDown)
        {
            if(my.sprite.player.x > 25)
            {
                my.sprite.player.x -= 5;
            }
        }
        if(this.keyD.isDown)
        {
            if(my.sprite.player.x < 775)
            {
                my.sprite.player.x += 5;
            }
        }

        if(my.sprite.bullet.visible)
        {
            my.sprite.bullet.y -= 10;
            if(my.sprite.bullet.y < -30)
            {
                my.sprite.bullet.visible = false;
            }
        }
    }
}