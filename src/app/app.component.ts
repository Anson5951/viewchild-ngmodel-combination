import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  VERSION,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { NgModel } from '@angular/forms';
import { skip } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  
  @ViewChildren('applicationInfo') applicationInfo: QueryList<NgModel>;
  @ViewChild(NgModel) nameReference: NgModel;
  @ViewChildren(NgModel) userNameReference: QueryList<NgModel>;

  name = 'name';
  userName = 'name';
  userAge = 'age';
  userDesignation = 'des';

  ngAfterViewInit(): void {
    console.log('applicationInfo List: ' + this.applicationInfo.length);
    this.nameReference.valueChanges.pipe(skip(1)).subscribe(a => {
      console.log(a);
    });
    for (let i of this.userNameReference.toArray()) {
      i.valueChanges.pipe(skip(1)).subscribe(value => {
        console.log(`value : ${value}`);
      });
      i.statusChanges.pipe(skip(1)).subscribe(status => {
        console.log(`status: ${status}`);
      });
    }
  }
}
