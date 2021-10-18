import { Heroe } from './../interfaces/heroe';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroes: Heroe[] = [];

  constructor(
    private http: HttpClient
  ) {
    this.http.get<Heroe[]>(`${environment.baseUrl}/all.json`).subscribe(
      heroes => {
        this.heroes = heroes
      }
    )
  }

  getList(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${environment.baseUrl}/all.json`);
  }



  getDatailsHeroe(id: number): Observable<Heroe> {
    return this.http.get<Heroe>(`${environment.baseUrl}/id/${id}.json`);
  }

  searchHeroe( term: string ): Heroe[] {

    let heroesArr: Heroe[] = [];
    term = term.toLowerCase();

    for ( let heroe of this.heroes ){
      let nombre = heroe.name.toLowerCase();
      if(nombre.indexOf(term) >= 0){
        heroesArr.push(heroe)
      }
    }

    return heroesArr;
  }
}
