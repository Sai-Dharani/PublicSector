import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'publicsector';
  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    var d1 = this.elementRef.nativeElement.querySelector('cx-page-slot');
    d1.insertAdjacentHTML('beforeend', '<div class="pageLeftTitle1">Sign in - returning cetizen</div>');
    d1.insertAdjacentHTML('beforeend', '<div class="pageLeftTitle2">Already have an account? Sign in to retrieve your account settings.</div>');
    d1.insertAdjacentHTML('beforeend', '<div class="pageLeftTitle2">Fields marked <span class="at-red">*</span> are required Email Address .</div>');
  }


}
