import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAddRichTextComponent } from './add-rich-text.component';

describe('BlogAddComponent', () => {
  let component: BlogAddRichTextComponent;
  let fixture: ComponentFixture<BlogAddRichTextComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BlogAddRichTextComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogAddRichTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
