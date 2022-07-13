import { Injectable } from "@angular/core";
import { Client } from "./client.model";

@Injectable({ providedIn: 'root' })
export class ClientsService {
    clients: Client[] = [
        new Client("Sarah MARTIN", "Comptabilité", true),
        new Client("Gérard MARTIN", "Maintenance", false),
        new Client("Chloée SCHMIT", "Management", true),
        new Client("Laurent BECK", "Technique", true),
        new Client("Eloise WILLIAMS", "Technique", false)
    ];

    switchClient(id: number) {
        const clientFound = this.getClientById(id);
        if (clientFound) {
            clientFound.isActive = !clientFound.isActive;
        }
    }

    getClientById(id: number) {
        return this.clients.find(x => x.id == id);
    }

    getActiveClients() {
        return this.clients.filter(x => x.isActive);
    }

    getInactiveClients() {
        return this.clients.filter(x => !x.isActive);
    }

}