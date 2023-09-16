import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent {

  counter: number = 10

  constructor() {

  }

  increaseBy(value: number) {
    this.counter += value
  }
  decreasyBy(value: number){
    this.counter -= value;
  }
}
