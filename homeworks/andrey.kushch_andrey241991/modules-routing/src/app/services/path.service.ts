import { Injectable } from '@angular/core';
import { PATHES } from '../models/path';


@Injectable()
export class PathService {
    private actualPathes = [];

    private showResult(): void {
        const fullPath = this.actualPathes.join('');
        PATHES.forEach(item => {
            const result = item.journey.join('') === fullPath;
            if (result) {
                console.log('Result is', item.message)
            }
        })
    }

    private clearData(): void {
        this.actualPathes = [];
    }

    public checkPath(url: string): void {
        this.actualPathes.push(url);
        if (this.actualPathes.length === 3) {
            this.showResult()
            this.clearData();
        }
    }

}