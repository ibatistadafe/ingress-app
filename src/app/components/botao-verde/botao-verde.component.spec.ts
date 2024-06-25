import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoVerdeComponent } from './botao-verde.component';

describe('BotaoVerdeComponent', () => {
  let component: BotaoVerdeComponent;
  let fixture: ComponentFixture<BotaoVerdeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaoVerdeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BotaoVerdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
