import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from '../../../app/basic/counter/counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let compiled: HTMLElement

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    });
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('debe de hacer match con el snapshot', () => {
    expect(compiled).toMatchSnapshot();
  });

  test("increasyBy debe de incremetar basado el argumento", () => {
    component.increaseBy(5)
    component.decreasyBy(5)
    expect(component.counter).toBe(10)
  });

  test("Hacer click en los botones debe incremetar y decrementar en 1", () => {
    const buttons = compiled.querySelectorAll('button')
    buttons[0].click()
    expect(component.counter).toBe(11)
  })

  test("Cambiar el counter debe de actualizar la etiqueta h1",()=> {
    component.increaseBy(10)
    fixture.detectChanges()
    const h1 = compiled.querySelector("h1")
    expect(h1?.textContent).toContain('20')
  })

});
