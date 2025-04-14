import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SierraLeoneComponent } from './sierra-leone.component';

describe('SierraLeoneComponent', () => {
  let component: SierraLeoneComponent;
  let fixture: ComponentFixture<SierraLeoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SierraLeoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SierraLeoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
