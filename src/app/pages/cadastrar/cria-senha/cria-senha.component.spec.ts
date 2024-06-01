import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriaSenhaComponent } from './cria-senha.component';

describe('CriaSenhaComponent', () => {
  let component: CriaSenhaComponent;
  let fixture: ComponentFixture<CriaSenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriaSenhaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CriaSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
