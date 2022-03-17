import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Hello Angular!</h1>`,
  styles: [`
    body {
      margin: 0;
    }
    
    h1 {
      text-align: center;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
}
