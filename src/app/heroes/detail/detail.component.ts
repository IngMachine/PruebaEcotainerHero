import { Heroe, Appearance, Biography, Work, Connections } from './../interfaces/heroe';
import { HeroesService } from './../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  heroe!: Heroe;
  appearance!: Appearance;
  biography!: Biography;
  work!: Work;
  connections!: Connections;

  constructor(
    private heroesService: HeroesService,
    private activedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = this.activedRoute.snapshot.params.id;
    this.heroesService.getDatailsHeroe(id).subscribe(
      heroe => {
        this.heroe = heroe;
        this.appearance = heroe.appearance;
        this.biography = heroe.biography;
        this.work = heroe.work;
        this.connections = heroe.connections;
      },
      error => {
        this.router.navigateByUrl('/error404')
      }
    )
  }

}
