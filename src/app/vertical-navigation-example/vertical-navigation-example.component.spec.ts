import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalNavigationExampleComponent } from './vertical-navigation-example.component';

describe('VerticalNavigationExampleComponent', () => {
  let component: VerticalNavigationExampleComponent;
  let fixture: ComponentFixture<VerticalNavigationExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalNavigationExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalNavigationExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
