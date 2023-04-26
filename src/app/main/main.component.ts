import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  public topic = 'cashGames';

  changeTopic(index: number) {
    if (index === 1) {
      this.topic = 'cashGames';
    } else if (index === 2) {
      this.topic = 'springSries';
    } else {
      this.topic = 'finalStage';
    }
    console.log(this.topic);
  }
}
