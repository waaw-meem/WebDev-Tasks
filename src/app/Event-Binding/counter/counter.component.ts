import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  digits:number = 0

  increament(){
    this.digits = this.digits + 1
  }
}
