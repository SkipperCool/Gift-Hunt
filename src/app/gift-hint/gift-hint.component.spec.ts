import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftHintComponent } from './gift-hint.component';

describe('GiftHintComponent', () => {
  let component: GiftHintComponent;
  let fixture: ComponentFixture<GiftHintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftHintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftHintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
