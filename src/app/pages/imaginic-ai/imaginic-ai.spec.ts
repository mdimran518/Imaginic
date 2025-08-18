import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImaginicAi } from './imaginic-ai';

describe('ImaginicAi', () => {
  let component: ImaginicAi;
  let fixture: ComponentFixture<ImaginicAi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImaginicAi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImaginicAi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
