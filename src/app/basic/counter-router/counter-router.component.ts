import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-counter-router',
  templateUrl: './counter-router.component.html',
  styles: [
  ]
})
export class CounterRouterComponent implements OnInit{

  public counter: number = 10

  constructor (private route: ActivatedRoute) {

  }

  ngOnInit(): void {
      const initialValue = Number(this.route.snapshot.paramMap.get('initial'))
      this.counter = isNaN(initialValue) ? 10 : initialValue

  }

  increaseBy(value: number) {
    this.counter += value
  }
  decreasyBy(value: number) {
    this.counter -= value;
  }
}
