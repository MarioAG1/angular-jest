import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherComponent } from '../../../src/app/basic/father/father.component';
import { FatherSonComponent } from '../../../src/app/basic/father-son/father-son.component';
import { By } from '@angular/platform-browser';

describe('FatherComponent', () => {
  let component: FatherComponent;
  let fixture: ComponentFixture<FatherComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FatherComponent, FatherSonComponent]
    })
      .compileComponents();
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(FatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test("debes hacer match con el snapshot", () => {
    expect(compiled).toMatchSnapshot();
  })

  test("debe de establecer el cliente con el nombre indicado", () => {
    component.onSetClient("Pepepe")
    fixture.detectChanges()

    const codeDiv = compiled.querySelector('.mt-2')
    console.log(codeDiv?.textContent);

    expect(codeDiv?.textContent).toContain('"name"')
    expect(codeDiv?.textContent).toContain('"Pepepe"')
  })

  test("debe de borrar el cliente si se emite onDeleteClient (hijo) ", () => {
    component.client = { id: 1, name: "Eduardo" }
    fixture.detectChanges()

    const sonDebugElement = fixture.debugElement.query(By.directive(FatherSonComponent))
    const sonComponent: FatherSonComponent = sonDebugElement.componentInstance;

    sonComponent.onDeleteClient.emit()
    expect(component.client).toBe(undefined)
  })

  test("debe de actualizar el cliente onClientUpdate", () => {
    component.client = { id: 1, name: "Eduardo" }
    fixture.detectChanges()

    const sonDebugElement = fixture.debugElement.query(By.directive(FatherSonComponent))
    const sonComponent: FatherSonComponent = sonDebugElement.componentInstance;

    // toBe cuando algo es igual a primitivo (string,number,boolean)
    sonComponent.onUpdateClient.emit({ id: 10, name: "Pedro" })
    expect(component.client).toEqual({id: 10, name: "Pedro" })
  })
});
