import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-searchbox',
  templateUrl: './searchbox.component.html',
  styles: ``
})
export class SearchboxComponent implements OnInit, OnDestroy{
  private debouncer = new Subject<string>();
  private debouncerSubscription?:Subscription;

@Input()
placeholder:string ='';

@Output()
OnValue = new EventEmitter<string>();

@Output()
OnDebounce = new EventEmitter<string>();

emitValue(value:string):void{
this.OnValue.emit(value);
}

onKeypress(searchTerm:string){
this.debouncer.next(searchTerm);
}

ngOnInit(): void {
 this.debouncerSubscription = this.debouncer
  .pipe(
    debounceTime(1000)
  )
  .subscribe(value =>{
   this.OnDebounce.emit(value);
  });
}

ngOnDestroy(): void {
  this.debouncerSubscription?.unsubscribe();
}

}
