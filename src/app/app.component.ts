import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'liff-demo';
  // os: ReturnType<typeof liff.getOS>;
  // profile!: UnPromise<ReturnType<typeof liff.getProfile>>;
  liffId = '1656847316-47Z33YLm'
  // constructor(private route: ActivatedRoute) {}

}
