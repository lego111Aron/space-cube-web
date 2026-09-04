import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { Kockulosroom2026nyarComponent } from './kockulosroom2026nyar.component';

describe('Kockulosroom2026nyarComponent', () => {
  let component: Kockulosroom2026nyarComponent;
  let fixture: ComponentFixture<Kockulosroom2026nyarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Kockulosroom2026nyarComponent],
      imports: [CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kockulosroom2026nyarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
