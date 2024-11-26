import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PPAComponent } from './ppa.component';

describe('PPAComponent', () => {
  let component: PPAComponent;
  let fixture: ComponentFixture<PPAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PPAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PPAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
