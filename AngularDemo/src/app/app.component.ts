import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularDemo';
  Interpolation = "InterpolationTest";
  PropertyBing = "https://www.google.com/";
  TwoWayBinding = 0;
  AttributeDirectives = 15;
  PipeTestString = "PipeTestString";
  PipeTestNumber = 2.71828;
  pi =3.14;
  EventBing($event: MouseEvent) {
    alert('ClickEventBing');
    console.log($event.target);
  }
  CntAdd() {
    this.TwoWayBinding++;
  }
  AttributeDirectivesAdd() {
    this.AttributeDirectives++;
  }
  getSyle(){
    return {'font-size': 12 + this.AttributeDirectives+'px'};
  }

}
