class EndScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'EndScene'
    })
  }

  preload() {
    this.load.spritesheet('playerWins', 'https://content.codecademy.com/courses/learn-phaser/electric-mouse/won.png', {
      frameWidth: 480,
      frameHeight: 640
    });
    this.load.spritesheet('playerLose', 'https://content.codecademy.com/courses/learn-phaser/electric-mouse/lost.png', {
      frameWidth: 480,
      frameHeight: 640
    });
  }

  create() {

    this.add.text(10, 50, 'End Screen', {
      fill: '#4D39E0',
      fontSize: '45px'
    });
    if (gameState.player.health <= 0) {
      // Add the playerLose sprite and animation below:
      let lose = this.add.sprite(240, 320, 'playerLose');
      this.anims.create({
        key: 'lose',
        frames: this.anims.generateFrameNames('playerLose', {
          start: 0,
          end: 1
        }),
        delay: 0,
        frameRate: 2,
        repeat: -1
      });
      lose.anims.play('lose');
    } else {
      // Add the playerWins sprite and animation below:
      let win = this.add.sprite(240, 320, 'playerWins');
      this.anims.create({
        key: 'win',
        frames: this.anims.generateFrameNames('playerWins', {
          start: 0,
          end: 1
        }),
        delay: 0,
        frameRate: 2,
        repeat: -1
      });
      win.anims.play('win');
    }

    this.input.on('pointerdown', () => {
      // Add logic to transition from EndScene to GameScene
      gameState = {
        player: {},
        computer: {},
        computerSprite: {},
        playerHealthBar: '',
        computerHealthBar: '',
        attackButton: '',
        defendButton: '',
        specialButton: '',
        information: '',
        playerMove: '',
        computerMove: '',
        waveCount: 0,
        opponents: []
      }
      this.scene.stop('EndScene');
      this.scene.start('GameScene');
    })
  }
}