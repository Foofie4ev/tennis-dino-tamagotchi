class TennisDinosaur {
    constructor() {
        // Core attributes
        this.age = 0;
        this.skillLevel = 0;
        
        // Vital stats
        this.hunger = 100;
        this.happiness = 100;
        this.health = 100;
        this.energy = 100;
        this.weight = 50;

        // Additional attributes
        this.injuries = [];
        this.recoveryTime = 0;
        this.nutritionLevel = 100;
        this.lastUpdateTime = Date.now();
    }

    update() {
        const currentTime = Date.now();
        const timePassed = (currentTime - this.lastUpdateTime) / 1000 / 60; // minutes

        // Decrease attributes over time
        this.hunger = Math.max(0, this.hunger - (0.5 * timePassed));
        this.energy = Math.max(0, this.energy - (0.3 * timePassed));
        this.happiness = Math.max(0, this.happiness - (0.1 * timePassed));

        // Age progression
        this.age += timePassed / (24 * 60); // Days

        this.lastUpdateTime = currentTime;
    }

    eat(foodType) {
        switch(foodType) {
            case 'protein':
                this.hunger += 40;
                this.nutritionLevel += 15;
                this.weight += 1;
                this.health += 5;
                break;
            case 'carbs':
                this.hunger += 30;
                this.nutritionLevel += 10;
                this.energy += 10;
                break;
            case 'vegetables':
                this.hunger += 20;
                this.nutritionLevel += 20;
                this.health += 10;
                break;
        }

        // Bound checking
        this.hunger = Math.min(100, this.hunger);
        this.nutritionLevel = Math.min(100, this.nutritionLevel);
    }

    exercise(intensity) {
        if (this.energy < 20) return false;

        switch(intensity) {
            case 'light':
                this.energy -= 10;
                this.skillLevel += 0.1;
                this.happiness += 5;
                break;
            case 'medium':
                this.energy -= 20;
                this.skillLevel += 0.2;
                this.happiness += 10;
                break;
            case 'intense':
                this.energy -= 35;
                this.skillLevel += 0.3;
                this.happiness += 15;
                break;
        }

        return true;
    }

    heal(treatmentType) {
        switch(treatmentType) {
            case 'rest':
                this.health += 5;
                this.energy += 10;
                break;
            case 'stretch':
                this.health += 10;
                this.happiness += 5;
                this.energy -= 5;
                break;
            case 'medical':
                if (this.injuries.length > 0) {
                    this.injuries.pop();
                    this.health += 20;
                }
                break;
        }

        this.health = Math.min(100, this.health);
    }

    simulateTournament(level) {
        const tournamentOutcomes = {
            'local': { winChance: 0.6, skillBoost: 0.3, happinessBoost: 15 },
            'regional': { winChance: 0.4, skillBoost: 0.5, happinessBoost: 25 },
            'national': { winChance: 0.2, skillBoost: 0.7, happinessBoost: 40 }
        };

        const tournament = tournamentOutcomes[level];
        
        if (Math.random() < tournament.winChance) {
            this.skillLevel = Math.min(7, this.skillLevel + tournament.skillBoost);
            this.happiness += tournament.happinessBoost;
        } else {
            this.happiness -= 10;
        }
    }
}

export default TennisDinosaur;
