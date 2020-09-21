import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import BudgetItem from '../../../shared/model/budget-item.model';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {

  @Input() budgetItem: BudgetItem;
  @Output() xButtonClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() cardClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onXButtonClick(): void {
    this.xButtonClick.emit();
  }

  onCardClick(): void {
    this.cardClick.emit();
  }

}
