// TestBed -> Platform on which we store the component that we want to test

import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  // 3 test case i.e. specification functions aahe
  // it -> test case sathi cha function aahe 
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'testing' title`, () => {
    // AppComponent la create kara
    const fixture = TestBed.createComponent(AppComponent);
    // AppComponent create kelyavr tyachya instance i.e. object la naav dile -> app
    const app = fixture.componentInstance;
    // aapn expect kartoy title hai 'testing' pahije

    // expect -> Method of Jasmine -> Testing Framework aahe -> for JavaScript -> Which integrate inside Angular
    expect(app.title).toEqual('testingX');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, testing');
  });
});
