import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAddComponent } from './add.component';

describe('BlogAddComponent', () => {
  let component: BlogAddComponent;
  let fixture: ComponentFixture<BlogAddComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BlogAddComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
