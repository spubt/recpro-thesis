import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFilteringModuleComponent } from './post-filtering-module.component';

describe('PostFilteringModuleComponent', () => {
  let component: PostFilteringModuleComponent;
  let fixture: ComponentFixture<PostFilteringModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostFilteringModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostFilteringModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
