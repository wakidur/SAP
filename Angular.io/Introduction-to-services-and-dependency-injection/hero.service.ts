import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {
    private heroes: Hero[] = [];

    constructor(
        private backend: BackendService,
        private logger: Logger) { }

    getHeroes() {
        
        this.backend.getAll(Hero).then((heroes: Hero[]) => {
            this.logger.log(`Fetched ${heroes.length} heroes.`);
            this.heroes.push(...heroes); // fill cache
        }).catch((err) => {
            this.logger.error(`Error message:  ${err} `);
        });

        return this.heroes;
    }
}