new Vue ({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: [],
    },
    methods: {
        startNewGame: function() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function() {
            //Check option 
            if (this.checkPlayerOptions()) {
                return;
            };

            //Người chơi đánh monster 
            var damage = this.inputDamage(4, 10);
            this.monsterHealth -= damage;

            this.turns.unshift({
                isPlayerAttack: true,
                textLog: 'Player attacks monster : ' + damage,
            });

            //Monster đánh người chơi
            this.monsterAttack();

            this.checkPlayerOptions();
        },
        specialAttack: function() {
            //Check option 
            if (this.checkPlayerOptions()) {
                return;
            };

            //Người chơi đánh monster 
            var damage = this.inputDamage(10, 20);
            this.monsterHealth -= damage;

            this.turns.unshift({
                isPlayerAttack: true,
                textLog: 'Player attacks monster : ' + damage,
            });

            //Monster đánh người chơi
            this.monsterAttack();

            this.checkPlayerOptions();
        },
        heal: function() {
            //Player
            if (this.playerHealth > 70) {
                return false;
            } else if (this.playerHealth <= 60) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 70;
            }

            this.turns.unshift({
                isPlayerAttack: true,
                textLog: 'Player heals 10',
            });

            //Monster
            this.monsterAttack();
        },
        giveUp: function() {
            this.gameIsRunning = false;
            this.turns = [];
            this.playerHealth = 100;
            this.monsterHealth = 100;
            alert('You lost!');
        },
        inputDamage: function(minDamage, maxDamage) {
            return Math.max(Math.floor(Math.random() * maxDamage) + 1, minDamage);
        },
        monsterAttack: function() {
            var damage = this.inputDamage(5, 12);
            this.playerHealth -= damage;

            this.turns.unshift({
                isPlayerAttack: false,
                textLog: 'Monster attacks player : ' + damage,
            });
        },
        checkPlayerOptions: function() {
            if (this.monsterHealth <= 0) {
                if (confirm('You won! New game?')) {
                    this.startNewGame();
                    //this.gameIsRunning = true;
                } else {
                    this.gameIsRunning = false;
                }

                return true;
            } else if (this.playerHealth <= 0) {
                if (confirm('You lost! New game?')) {
                    this.startNewGame();
                    //this.gameIsRunning = true;
                } else {
                    this.gameIsRunning = false;
                }

                return true;
            }

            return; //Không có 2 trường hợp này thì coi như ko chi xảy ra
        }
    }
});
