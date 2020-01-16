import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent {
  @Input() rating: number;

  public get filledStars(): any[] {
    return Array(Math.floor(this.rating));
  }

  public get showHalfStar(): boolean {
    return this.rating - Math.floor(this.rating) >= .5;
  }

  public get emptyStars(): any[] {
    let emptyStars = 5 - this.filledStars.length;
    if (this.showHalfStar) {
      emptyStars--;
    }
    return Array(emptyStars);
  }
}
