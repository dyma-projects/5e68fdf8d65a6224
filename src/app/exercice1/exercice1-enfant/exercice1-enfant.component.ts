import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() public compteur: number;
  @Output() public eventCompteur: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  increase() {
    this.compteur++;
    this.eventCompteur.emit(this.compteur);
  }

  decrease() {
    this.compteur--;
    this.eventCompteur.emit(this.compteur);
  }

}
