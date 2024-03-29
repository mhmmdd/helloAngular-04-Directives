import {Directive, TemplateRef, ViewContainerRef} from 'angular2/core';

@Directive({
  selector: '[myUnless]',
  inputs: ['myUnless:myUnless']
})

export class UnlessDirective {
  constructor(private _templateRef: TemplateRef, private _viewContainerRef: ViewContainerRef) {}

  set myUnless(condition: boolean) {
    if(!condition) {
      console.log(this._templateRef);
      this._viewContainerRef.createEmbeddedView(this._templateRef);
    } else {
      this._viewContainerRef.clear();
    }
  }
}
