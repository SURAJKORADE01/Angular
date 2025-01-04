import { Directive, ElementRef, HostListener } from '@angular/core';

// Khalcha class ha Directive cha class aahe
@Directive({
  // selector cha use ha HTML la show karnya sathi kela jato
  selector: '[appMarvellous]', // used in HTML
  standalone: true
})

export class MarvellousDirective 
{
  constructor(private obj : ElementRef) 
  { 
    // Directive cha vapar ha HTML madhe kela ki MarvellousDirective cha object create hoil aani
    // mg constructor call hoil aani console.log hai display hoil
    // console.log("Inside Directive Constructor...");
  }

  // appMarvellous -> hai HTML madhe use kelyavr HTML chya content ne kasa disayacha hyacha logic class madhe lihaycha

  // native element la change karaycha aasel use HostListener
  // element vr action ghenyasathi ElementRef
  // ElementRef class ha DI use karun inject zala
  // obj -> class cha object

  // onmouseenter() -> mouse enter zala tr execute kr -> aasha 12 methods aahet
  @HostListener('mouseenter') onmouseenter()
  {
                          // text colout , font , size kahi pn karu shakto
    this.obj.nativeElement.style.background = 'blue';
  }

  @HostListener('mouseleave') onmouseleave()
  {
    this.obj.nativeElement.style.background = 'red';
  }
}
