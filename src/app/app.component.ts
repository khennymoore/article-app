import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'article-app';

  isShow: boolean = true;

  onClick() {
    this.isShow = !this.isShow;
  }
}
