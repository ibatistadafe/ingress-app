import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionaMaisIngressoComponent } from './adiciona-mais-ingresso.component';

describe('AdicionaMaisIngressoComponent', () => {
  let component: AdicionaMaisIngressoComponent;
  let fixture: ComponentFixture<AdicionaMaisIngressoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdicionaMaisIngressoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdicionaMaisIngressoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
