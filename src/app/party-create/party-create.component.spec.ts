import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyCreateComponent } from './party-create.component';

describe('PartyFormComponent', () => {
  let component: PartyCreateComponent;
  let fixture: ComponentFixture<PartyCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartyCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartyCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
