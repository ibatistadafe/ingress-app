import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderFormComponent } from './loader-form.component';

describe('LoaderFormComponent', () => {
  let component: LoaderFormComponent;
  let fixture: ComponentFixture<LoaderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoaderFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoaderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
