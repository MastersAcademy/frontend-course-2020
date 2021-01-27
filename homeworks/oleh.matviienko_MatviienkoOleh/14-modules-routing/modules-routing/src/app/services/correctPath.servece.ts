import { NgModuleResolver } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Path } from "../interfaces/path.interface";

@Injectable({
    providedIn: 'root'
})
export class correctPathService {

    currentUrl: string[] = [];
    mockList: Path[]= [
        {
            message: 'User tends to home',
            journey: ['/home', '/account', '/home']
        },
        {
            message: 'User tends to account',
            journey: ['/account', '/home', '/account']
        },
        {
            message: 'User loves journeys',
            journey: ['/home', '/account', '/accessories']
        }
    ]; 

    findPath(url: string) {
        this.currentUrl.push(url);
        const currentUrlString: string = this.currentUrl.toString();
        
        for(let i = 0; i < this.mockList.length; i++) {
            if (currentUrlString.includes(this.mockList[i].journey.toString())){
                console.log(this.mockList[i].message)
                this.currentUrl = [];
            }
        }
    }
}
