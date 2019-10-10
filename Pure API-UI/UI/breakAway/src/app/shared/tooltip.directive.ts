import { Directive, ElementRef, HostListener, Input } from "@angular/core";
import * as $ from "jquery";

@Directive({
  selector: "[appTooltip]"
})
export class TooltipDirective {
  constructor(private el: ElementRef) {}

  @Input("appTooltip") tooltipPlacement: string;

  @HostListener("mouseenter") onMouseEnter() {
    this.tooltip(this.tooltipPlacement || "top");
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.tooltip(null);
  }

  private tooltip(placement: string) {
    this.el.nativeElement.style.backgroundColor = placement;

    $(function() {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }
}
