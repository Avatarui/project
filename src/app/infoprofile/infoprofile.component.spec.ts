import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoprofileComponent } from './infoprofile.component';

describe('InfoprofileComponent', () => {
  let component: InfoprofileComponent;
  let fixture: ComponentFixture<InfoprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoprofileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
