import { Component, OnInit, Renderer2 } from '@angular/core';
import { scriptService } from './script.service';

const srcWidget: string = 'https://unpkg.com/blip-chat-widget@1.6.*';
declare let BlipChat: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private renderer: Renderer2,
    private scriptService: scriptService
  ) {}

  title = 'guiaTransparencia';

  ngOnInit() {
    const scriptElement = this.scriptService.loadJsScript(
      this.renderer,
      srcWidget
    );
    scriptElement.onload = () => {
      new BlipChat()
        .withAppKey(
          'YmVjY2ExOjU4N2M4MGYyLTBhM2MtNDVlZi04MTQyLTVkY2YwNjQwMjc0MA=='
        )
        .withButton({ color: '#2CC3D5', icon: '' })
        .withCustomCommonUrl('https://takeblip-shaiana-zan.chat.blip.ai/')
        .withoutHistory()
        .build();
    };
    scriptElement.onerror = () => {
      console.log('Could not load the Google API Script!');
    };
  }
}
