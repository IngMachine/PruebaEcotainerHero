import { Heroe } from './../interfaces/heroe';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() heroe!: Heroe
  isList: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(this.router.url == '/heroes/list'){
      this.isList = true;
    }
  }

}
