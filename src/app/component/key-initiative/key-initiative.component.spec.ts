import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyInitiativeComponent } from './key-initiative.component';

describe('KeyInitiativeComponent', () => {
  let component: KeyInitiativeComponent;
  let fixture: ComponentFixture<KeyInitiativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyInitiativeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyInitiativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
