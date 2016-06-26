import {Directive, ElementRef, OnInit, Renderer} from 'angular2/core';

@Directive({
  selector: '[myHighlight]',
  inputs: ['highlightColor:myHighlight'],
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
  }
})

export class HighlightDirective
//implements OnInit
{
  private _defaultColor = 'green';
  highlightColor: string;

  constructor(private _elRef: ElementRef, private _renderer: Renderer) {}

  // ngOnInit():any {
  //   // this._elRef.nativeElement.style.backgroundColor = this._defaultColor;
  //   this._renderer.setElementStyle(this._elRef.nativeElement, 'background-color', (this.highlightColor || this._defaultColor));
  // }

  onMouseEnter() {
    this.highight(this.highlightColor || this._defaultColor);
  }

  onMouseLeave() {
    this.highight(null);
  }

  private highight(color: string) {
    this._renderer.setElementStyle(this._elRef.nativeElement, 'background-color', color);
  }
}
