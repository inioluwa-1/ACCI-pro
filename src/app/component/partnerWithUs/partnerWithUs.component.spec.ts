import { ComponentFixture, TestBed } from '@angular/core/testing';
import { partnerWithUsComponent } from './partnerWithUs.component';

describe('partnerWithUsComponent', () => {
  let component: partnerWithUsComponent;
  let fixture: ComponentFixture<partnerWithUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [partnerWithUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(partnerWithUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
