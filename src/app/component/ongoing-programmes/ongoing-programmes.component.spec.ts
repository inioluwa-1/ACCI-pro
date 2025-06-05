import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OngoingProgrammesComponent } from './ongoing-programmes.component';

describe('OngoingProgrammesComponent', () => {
  let component: OngoingProgrammesComponent;
  let fixture: ComponentFixture<OngoingProgrammesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OngoingProgrammesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OngoingProgrammesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
