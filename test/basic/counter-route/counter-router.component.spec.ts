import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterRouterComponent } from '../../../src/app/basic/counter-router/counter-router.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';

describe('CounterRouterComponent', () => {
  let component: CounterRouterComponent;
  let fixture: ComponentFixture<CounterRouterComponent>;

  test("Debe de tener el valor inicial en 0", () => {
    TestBed.configureTestingModule({
      declarations: [CounterRouterComponent],
      imports: [
        RouterTestingModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CounterRouterComponent)
    component = fixture.componentInstance;
    fixture.detectChanges()

    expect(component.counter).toBe(0)
  })

  test("Debe de tener el valor inicial de 100 en la ruta /counter/100", () => {

    const mockActivedRoute = {
      snapshot: {
        paramMap: {
          get(param: string) {
              return (param === 'initial') ? '100' : undefined
          }
        }
      }
    }

    TestBed.configureTestingModule({
      declarations: [CounterRouterComponent],
      providers: [{ provide: ActivatedRoute, useValue: mockActivedRoute  }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CounterRouterComponent)
    component = fixture.componentInstance;
    fixture.detectChanges()

    expect(component.counter).toBe(100)
  })

   test("Debe de tener el valor inicial de 100 en la ruta /counter/20abc", () => {

    const mockActivedRoute = {
      snapshot: {
        paramMap: {
          get(param: string) {
              return (param === 'initial') ? '20abc' : undefined
          }
        }
      }
    }

    TestBed.configureTestingModule({
      declarations: [CounterRouterComponent],
      providers: [{ provide: ActivatedRoute, useValue: mockActivedRoute  }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CounterRouterComponent)
    component = fixture.componentInstance;
    fixture.detectChanges()

    expect(component.counter).toBe(10)
  })
})
