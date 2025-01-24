import { Component, OnInit, OnChanges, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page implements OnInit, OnChanges, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {}

  // ngOnInit: Called once, after the component's inputs are bound for the first time.
  ngOnInit() {
    //console.log('ngOnInit: Tab1Page component initialized');
  }

  // ngOnChanges: Called when the input properties of the component change.
  ngOnChanges() {
    //console.log('ngOnChanges: Input properties changed');
  }

  // ngDoCheck: Called during every change detection run.
  ngDoCheck() {
    //console.log('ngDoCheck: Change detection triggered');
  }

  // ngAfterViewInit: Called once after the component’s view has been initialized.
  ngAfterViewInit() {
    //console.log('ngAfterViewInit: Component view initialized');
  }

  // ngAfterViewChecked: Called after every check of the component’s view.
  ngAfterViewChecked() {
    //console.log('ngAfterViewChecked: Component view checked');
  }

  // ngOnDestroy: Called just before the component is destroyed.
  ngOnDestroy() {
    //console.log('ngOnDestroy: Tab1Page component is about to be destroyed');
  }

}
