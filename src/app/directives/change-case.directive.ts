import { Directive, ElementRef,OnInit } from '@angular/core';

@Directive({
  selector: '[appChangeCase]'
})
export class ChangeCaseDirective {

  constructor(private elref:ElementRef ) {}
  ngOnInit(){
console.log(this.elref.nativeElement.value);


  }
}
