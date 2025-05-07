import TennisDinosaur from './dinosaur.js';

class TennisDinoGame {
    constructor() {
        this.dinosaur = new TennisDinosaur();
        this.gameLoop = null;
        this.initializeEventListeners();
    }

    start() {
        this.gameLoop = setInterval(() => {
            this.dinosaur.update();
            this.render();
        }, 1000);
    }

    render() {
        document.getElementById('age').textContent = this.dinosaur.age.toFixed(2);
        document.getElementById('skill-level').textContent = this.dinosaur.skillLevel.toFixed(1);
        document.getElementById('hunger').textContent = this.dinosaur.hunger.toFixed(0);
        document.getElementById('happiness').textContent = this.dinosaur.happiness.toFixed(0);
        document.getElementById('health').textContent = this.dinosaur.health.toFixed(0);
        document.getElementById('energy').textContent = this.dinosaur.energy.toFixed(0);
        document.getElementById('weight').textContent = this.dinosaur.weight.toFixed(1);
        document.getElementById('nutrition').textContent = this.dinosaur.nutritionLevel.toFixed(0);
    }

    initializeEventListeners() {
        // Feeding
        document.getElementById('feed-protein').addEventListener('click', () => {
            this.dinosaur.eat('protein');
        });
        document.getElementById('feed-carbs').addEventListener('click', () => {
            this.dinosaur.eat('carbs');
        });
        document.getElementById('feed-vegetables').addEventListener('click', () => {
            this.dinosaur.eat('vegetables');
        });

        // Exercise
        document.getElementById('exercise-light').addEventListener('click', () => {
            this.dinosaur.exercise('light');
        });
        document.getElementById('exercise-medium').addEventListener('click', () => {
            this.dinosaur.exercise('medium');
        });
        document.getElementById('exercise-intense').addEventListener('click', () => {
            this.dinosaur.exercise('intense');
        });

        // Healing
        document.getElementById('heal-rest').addEventListener('click', () => {
            this.dinosaur.heal('rest');
        });
        document.getElementById('heal-stretch').addEventListener('click', () => {
            this.dinosaur.heal('stretch');
        });
        document.getElementById('heal-medical').addEventListener('click', () => {
            this.dinosaur.heal('medical');
        });

        // Tournaments
        document.getElementById('tournament-local').addEventListener('click', () => {
            this.dinosaur.simulateTournament('local');
        });
        document.getElementById('tournament-regional').addEventListener('click', () => {
            this.dinosaur.simulateTournament('regional');
        });
        document.getElementById('tournament-national').addEventListener('click', () => {
            this.dinosaur.simulateTournament('national');
        });
    }
}

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const game = new TennisDinoGame();
    game.start();
});

export default TennisDinoGame;
