import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeeListComponent } from './recipee-list.component';

describe('RecipeeListComponent', () => {
  let component: RecipeeListComponent;
  let fixture: ComponentFixture<RecipeeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
