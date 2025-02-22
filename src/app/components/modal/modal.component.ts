import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { Card } from '../../models/card';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal',
  imports: [CarouselModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  card = {} as Card;

  constructor(public bsModalRef: BsModalRef) {

  }

  esid1verificar(){
    return this.card.id=1;

  }
}
