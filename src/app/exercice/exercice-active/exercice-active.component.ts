import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Client } from '../client.model';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-exercice-active',
  templateUrl: './exercice-active.component.html',
  styleUrls: ['./exercice-active.component.css']
})
export class ExerciceActiveComponent implements OnInit {
  @Input('id') clientID!: number;  
  @Output('switchToInactive') switchStatus = new EventEmitter<number>;
  client!: Client;

  constructor(private clientsService: ClientsService) { }

  ngOnInit(): void {
    const clientFound = this.clientsService.getClientById(this.clientID);
    if (clientFound) this.client = clientFound;
  }

  onSwitchActivity() {
    this.switchStatus.emit(this.client.id);
  }

}
