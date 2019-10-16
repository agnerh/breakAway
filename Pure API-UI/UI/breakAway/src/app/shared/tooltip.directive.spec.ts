import { TestBed, ComponentFixture, tick, fakeAsync } from "@angular/core/testing";
import { ElementRef } from "@angular/core";

import { TooltipDirective } from "./tooltip.directive";
import { CustomersSortComponent } from "../customers/customers-sort/customers-sort.component";
import { By } from "@angular/platform-browser";

describe("TooltipDirective", () => {
  let fixture: ComponentFixture<CustomersSortComponent>;
  let component: CustomersSortComponent;
  //   let el: ElementRef;
  let des: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomersSortComponent, TooltipDirective]
      //   providers: [{ provide: ElementRef, useClass: MockElementRef }]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomersSortComponent);
    component = fixture.componentInstance;

    des = fixture.debugElement.queryAll(By.directive(TooltipDirective));
  });

  it("should create an instance", () => {
    const el: ElementRef = fixture.nativeElement.querySelector(".btn");
    const directive = new TooltipDirective(el);
    expect(directive).toBeTruthy();
  });

  it("should have five tooltips elements", () => {
    expect(des.length).toBe(5);
  });

  xit("should show correct text", fakeAsync(() => {
    const button = fixture.debugElement.query(By.css(".btn"));
    button.nativeElement.focus();
    fixture.detectChanges();
    tick(0);
    fixture.detectChanges();

    expect(fixture.nativeElement.ownerDocument.body.innerText).toContain("Sort by Id");
  }));
});

