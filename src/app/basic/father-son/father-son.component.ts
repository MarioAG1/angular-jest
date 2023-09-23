import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Client } from '../interfaces';

@Component({
  selector: 'app-father-son',
  templateUrl: './father-son.component.html',
  styleUrls: ['./father-son.component.css']
})
export class FatherSonComponent {

  @Input() client?: Client
  @Output() onDeleteClient = new EventEmitter()
  @Output() onUpdateClient = new EventEmitter<Client>()

  onDelete() {
    this.client = undefined;
    this.onDeleteClient.emit()
  }

  onUpdate(id: number) {
    if (!this.client) return;

    // this.client.id = id // No usar
    this.client = {...this.client, id: id}

    this.onUpdateClient.emit({...this.client})
  }

}
