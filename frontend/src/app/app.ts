import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('frontend');

  protected readonly text = signal('')

  async onButtonClick() {
    const result = await fetch('/api/')
    console.log(result.url);
    this.text.set(await result.text())
  }
}
