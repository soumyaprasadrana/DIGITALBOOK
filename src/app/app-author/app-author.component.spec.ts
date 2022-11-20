import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAuthorComponent } from './app-author.component';

describe('AppAuthorComponent', () => {
  let component: AppAuthorComponent;
  let fixture: ComponentFixture<AppAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppAuthorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
