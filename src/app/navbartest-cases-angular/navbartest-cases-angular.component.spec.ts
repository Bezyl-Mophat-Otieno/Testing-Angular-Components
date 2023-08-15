import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbartestCasesAngularComponent } from './navbartest-cases-angular.component';

describe('NavbartestCasesAngularComponent', () => {
  let component: NavbartestCasesAngularComponent;
  let fixture: ComponentFixture<NavbartestCasesAngularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbartestCasesAngularComponent]
    });
    fixture = TestBed.createComponent(NavbartestCasesAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should passs if the car brands have audi in the array ',()=>{

    let carBrands = ['audi','bmw','mercedes','toyota','honda'];

    expect(carBrands).toContain('audi');
  })


});
