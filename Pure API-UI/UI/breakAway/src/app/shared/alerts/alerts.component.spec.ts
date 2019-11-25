import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsComponent } from './alerts.component';
import { AlertsCommunicationService } from './alerts.commservice';
import { of } from 'rxjs';
import { AlertsType, Alert } from './alert';

describe('AlertsComponent', () => {
  let component: AlertsComponent;
  let fixture: ComponentFixture<AlertsComponent>;
  const alert: Alert = {
    message: 'This is a message',
    type: null
  };
  let alertServiceStub: Partial<AlertsCommunicationService>;

  beforeEach(async(() => {
    alertServiceStub = {
      alerts: of(alert)
    };

    TestBed.configureTestingModule({
      declarations: [AlertsComponent],
      providers: [
        { provide: AlertsCommunicationService, useValue: alertServiceStub }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use correct alert class primary', () => {
    component.alert.type = AlertsType.Primary;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.alert')).toHaveClass('alert-primary');
  });

  it('should use correct alert class secondary', () => {
    component.alert.type = AlertsType.Secondary;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.alert')).toHaveClass('alert-secondary');
  });

  it('should use correct alert class success', () => {
    component.alert.type = AlertsType.Success;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.alert')).toHaveClass('alert-success');
  });

  it('should use correct alert class danger', () => {
    component.alert.type = AlertsType.Danger;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.alert')).toHaveClass('alert-danger');
  });

  it('should use correct alert class warning', () => {
    component.alert.type = AlertsType.Warning;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.alert')).toHaveClass('alert-warning');
  });

  it('should use correct alert class info', () => {
    component.alert.type = AlertsType.Info;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.alert')).toHaveClass('alert-info');
  });

  it('should use correct alert class light', () => {
    component.alert.type = AlertsType.Light;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.alert')).toHaveClass('alert-light');
  });

  it('should use correct alert class dark', () => {
    component.alert.type = AlertsType.Dark;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.alert')).toHaveClass('alert-dark');
  });

  it('should display correct message', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.alert').textContent).toContain('This is a message');
  });

  it('should hide alert', () => {
    component.hideAlert();
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect((compiled as HTMLElement).children.length).toBe(0);
  });
});
