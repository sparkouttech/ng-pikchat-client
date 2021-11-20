import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgPikchatClientComponent } from './ng-pikchat-client.component';

describe('NgPikchatClientComponent', () => {
  let component: NgPikchatClientComponent;
  let fixture: ComponentFixture<NgPikchatClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgPikchatClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgPikchatClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
