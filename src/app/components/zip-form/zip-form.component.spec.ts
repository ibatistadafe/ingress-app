import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipFormComponent } from './zip-form.component';

describe('ZipFormComponent', () => {
  let component: ZipFormComponent;
  let fixture: ComponentFixture<ZipFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZipFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZipFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
