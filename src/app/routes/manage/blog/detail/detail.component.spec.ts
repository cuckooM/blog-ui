import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetailComponent } from './detail.component';

describe('BlogDetailComponent', () => {
  let component: BlogDetailComponent;
  let fixture: ComponentFixture<BlogDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BlogDetailComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
