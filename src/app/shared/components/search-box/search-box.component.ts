import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {
@Input()
placeholder: string="";
@Output()
onvalue:EventEmitter<string>=new EventEmitter()
txtSearchInput:string=""

emitir(){
this.onvalue.emit(this.txtSearchInput)
this.txtSearchInput=""
}

}
