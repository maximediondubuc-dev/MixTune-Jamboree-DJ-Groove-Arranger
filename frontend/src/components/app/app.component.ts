import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  async ngOnInit(): Promise<void> {

  }
  title = 'Mixtune-Jamboree';
}
