import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessRouteComponent } from './success-route.component';

describe('SuccessRouteComponent', () => {
  let component: SuccessRouteComponent;
  let fixture: ComponentFixture<SuccessRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessRouteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuccessRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
