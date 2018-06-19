import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaytileComponent } from './daytile.component';

describe('DaytileComponent', () => {
  let component: DaytileComponent;
  let fixture: ComponentFixture<DaytileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaytileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaytileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
