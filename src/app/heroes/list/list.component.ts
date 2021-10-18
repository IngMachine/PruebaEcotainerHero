import { HeroesService } from './../services/heroes.service';
import { Heroe } from './../interfaces/heroe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  heroesList: Heroe[] = [];
  noHero: boolean = false;

  constructor( private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.listHeroes();
  }

  listHeroes(): void{
    this.heroesService.getList().subscribe(
      heroes =>{
        for (let index = 0; index < 20; index++) {
          let aux = Math.round(Math.random()*563);
          this.heroesList.push(heroes[aux]);
        }
      }
    )
  }

  searchHeroe( term: string ){
    if(term.length == 0){
      this.heroesList = []
      this.listHeroes();
    } else{
      this.heroesList = this.heroesService.searchHeroe(term);
      if(this.heroesList.length == 0){
        this.noHero = true;
      }else{
        this.noHero = false;
      }
    }
  }

  refresh(): void {
    window.location.reload();
  }

}
