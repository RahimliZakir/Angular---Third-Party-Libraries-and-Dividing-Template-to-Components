import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/services/alertify.service';

declare let alertify: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private alertifyService: AlertifyService) { }

  ngOnInit() {
    // this.alertifyService.success("Xoş gəldiniz!");
    // this.alertifyService.error("Xoş gəlməyin!");
    // this.alertifyService.warning("Xoş gəlməyə bilərsiniz!");
    // this.alertifyService.message("Xoş gəliblər!");
  }

  title = 'Angular-Third Party Libraries And Components';
}
