import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharizardComponent } from '../../../app/basic/charizard/charizard.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from './../../../app/basic/services/pokemon.service';

describe('CharizardComponent', () => {
  let component: CharizardComponent;
  let fixture: ComponentFixture<CharizardComponent>;
  let service: PokemonService

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharizardComponent],
      imports: [HttpClientModule]
    });
    fixture = TestBed.createComponent(CharizardComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PokemonService)
    fixture.detectChanges();
  });


  test('should be create service', () => {
    expect(service).toBeTruthy();
  });

  test("Debe de traer informacion de bulbasur", (done) => {
    service.getPokemon(1)
      .subscribe(pokemon => {
        console.log(pokemon);
        expect(pokemon.name).toBe("bulbasaur")

        done();
      })
  })
});
