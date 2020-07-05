import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: "[appUnless]",
})
export class UnlessDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}

  @Input() set appUnless(condition) {
    condition
      ? this.vcRef.clear()
      : this.templateRef.createEmbeddedView(this.templateRef);
  }
}
