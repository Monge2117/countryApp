import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-searchbox',
  templateUrl: './searchbox.component.html',
  styles: ``
})
export class SearchboxComponent {
@Input()
placeholder:string ='';

@Output()
OnValue = new EventEmitter<string>();

emitValue(value:string):void{
this.OnValue.emit(value);
}
}
