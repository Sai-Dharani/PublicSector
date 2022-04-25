import { ChangeDetectorRef, Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-productDetails',
  templateUrl: './productDetails.component.html',
})
export class productDetailsComponent implements OnInit {
constructor(protected cdr: ChangeDetectorRef) { }

  ngOnInit(){
    //this.cdr.checkNoChanges()
  }
}
