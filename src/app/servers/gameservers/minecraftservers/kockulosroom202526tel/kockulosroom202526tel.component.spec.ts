import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { Kockulosroom202526telComponent } from './kockulosroom202526tel.component';
import { TranslatePipe } from '../../../../i18n/translate.pipe';

describe('Kockulosroom202526telComponent', () => {
  let component: Kockulosroom202526telComponent;
  let fixture: ComponentFixture<Kockulosroom202526telComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Kockulosroom202526telComponent],
      imports: [CommonModule, TranslatePipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kockulosroom202526telComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
