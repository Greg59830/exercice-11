export class Client {
    static count:number = 0

    id: number;
    
    constructor(public name: string, public service: string, public isActive: boolean) {
        this.id = ++Client.count
    }
}