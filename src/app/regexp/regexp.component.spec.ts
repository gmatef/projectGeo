import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegexpComponent } from './regexp.component';

describe('RegexpComponent', () => {
  let component: RegexpComponent;
  let fixture: ComponentFixture<RegexpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegexpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegexpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
