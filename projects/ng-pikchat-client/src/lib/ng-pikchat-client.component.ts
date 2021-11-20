import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-pikchat-client',
  templateUrl: './ng-pikchat-client.component.html',
  styleUrls: ['./ng-pikchat-client.component.css']
})
export class NgPikchatClientComponent implements OnInit {

  private connected = false;
  constructor() { }

  ngOnInit(): void {
  }

}
