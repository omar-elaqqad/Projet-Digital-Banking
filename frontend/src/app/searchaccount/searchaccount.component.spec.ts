import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchaccountComponent } from './searchaccount.component';

describe('SearchaccountComponent', () => {
  let component: SearchaccountComponent;
  let fixture: ComponentFixture<SearchaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchaccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
