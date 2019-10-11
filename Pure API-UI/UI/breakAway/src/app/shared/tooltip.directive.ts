import { Directive, ElementRef, OnInit, Input } from "@angular/core";

declare const $: any;

@Directive({
  selector: "[appTooltip]"
})
export class TooltipDirective implements OnInit {
  constructor(private el: ElementRef) {}

  @Input("appTooltip") appTooltipText: string;

  public ngOnInit(): void {
    $(this.el.nativeElement).tooltip({
      placement: "top",
      title: this.appTooltipText
    });
  }
}
