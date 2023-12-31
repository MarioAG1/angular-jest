import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherSonComponent } from '../../../src/app/basic/father-son/father-son.component';

describe('FatherSonComponent', () => {
  let component: FatherSonComponent;
  let fixture: ComponentFixture<FatherSonComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FatherSonComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FatherSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    jest.clearAllMocks();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('debe de hacer match con el snapshot', () => {
    expect(compiled).toMatchSnapshot();
  });

  test('no deben de aparecer botones si no hay cliente', () => {
    const buttons = compiled.querySelectorAll('button');
    expect(buttons.length).toBe(0);
  })

  test('deben de aparecer 2 botones si HAY cliente', () => {
    component.client = { id: 1, name: 'Juan' };
    fixture.detectChanges();

    const buttons = compiled.querySelectorAll('button');
    expect(buttons.length).toBe(2);
  });

  test('si hay cliente, hacer match con el snapshot', () => {
    component.client = { id: 1, name: 'Juan' };
    fixture.detectChanges();
    expect(compiled).toMatchSnapshot();
  });

  test('debe de emitir onDeleteClient con el boton de elmininar', () => {

    component.client = { id: 1, name: 'Mariow' };
    fixture.detectChanges();

    jest.spyOn(component.onDeleteClient, 'emit');

    const btnDelete = compiled.querySelector('[data-test=btn-delete]');
    btnDelete?.dispatchEvent(new Event('click'));

    expect(component.onDeleteClient.emit).toHaveBeenCalled();

  });

  test('debe de emitir onUpdateClient con el boton de "Cambiar ID"', () => {

    component.client = { id: 1, name: 'Mario' };
    fixture.detectChanges();

    jest.spyOn(component.onUpdateClient, 'emit');

    const btnChangeId = compiled.querySelector('[data-test=btn-id]');
    btnChangeId?.dispatchEvent(new Event('click'));

    expect(component.onUpdateClient.emit).toHaveBeenCalledWith({
      id: 4,
      name: 'Mario'
    });

  });


  test('deben de emitir onUpdateClient con el ID especificado SI hay un cliente', () => {

    jest.spyOn(component.onUpdateClient, 'emit');
    component.onUpdate(10);
    expect(component.onUpdateClient.emit).not.toHaveBeenCalled();

    component.client = { id: 1, name: 'Mario' };
    fixture.detectChanges();
    component.onUpdate(10);

    expect(component.onUpdateClient.emit).toHaveBeenCalledWith({
      id: 10,
      name: 'Mario'
    });

  });

});
