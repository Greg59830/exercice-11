import { Component, OnInit } from '@angular/core';
import { Client } from './client.model';
import { ClientsService } from './clients.service';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css']
})
export class ExerciceComponent implements OnInit {
  activeClients: Client[] = [];
  inactiveClients: Client[] = [];

  constructor(private clientsService: ClientsService) { }

  ngOnInit(): void {
    this.refreshClients();
  }

  handleSwitchStatus(id: number) {
    this.clientsService.switchClient(id);
    this.refreshClients();
  }

  refreshClients() {
    this.activeClients = this.clientsService.getActiveClients();
    this.inactiveClients = this.clientsService.getInactiveClients();
  }

}
