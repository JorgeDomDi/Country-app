import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent implements OnInit,OnDestroy {

 
  private debouncer:Subject<string>=new Subject<string>(); //es un tipo especial de Observable 
@Input()
placeholder: string="";
@Input()
initialValue: string="";
@Output()
onvalue:EventEmitter<string>=new EventEmitter()

@Output()
onDebounce:EventEmitter<string>=new EventEmitter()


ngOnInit(): void {
 this.debouncer.pipe(
  debounceTime(1000)
 )
 .subscribe(value=>{
  console.log('debouncer value ',value);
  this.onDebounce.emit(value);
 })
}
ngOnDestroy(): void {
 console.log("destruido");
 this.debouncer.unsubscribe()
 
}
// emitir(){
// this.onvalue.emit(this.txtSearchInput)
// this.txtSearchInput=""
// }
onKeyPress(searchTerm:string){
this.debouncer.next(searchTerm);
  
}

}
