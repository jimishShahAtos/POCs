import { Component } from '@angular/core';

@Component({
  selector: 'app-tabbed-nav',
  templateUrl: './tabbed-nav.component.html',
  styleUrls: ['./tabbed-nav.component.scss']
})
export class TabbedNavComponent {
  navLists: any[] = [
    {
      "isName":"All",
      "isLabel":"41",
      "isID":"pills-one-tab",
      "isClass": "nav-link text-center px-4 rounded-0 active",
      "isLink":"#pills-one",
      "isAreaControls":"pills-one"
    },
    {
      "isName":"Banking",
      "isLabel":"14",
      "isID":"pills-two-tab",
      "isClass": "nav-link text-center px-3 rounded-0",
      "isLink":"#pills-two",
      "isAreaControls":"pills-two"
    },
    {
      "isName":"Healthcare",
      "isLabel":"02",
      "isID":"pills-three-tab",
      "isClass": "nav-link text-center px-4 rounded-0",
      "isLink":"#pills-three",
      "isAreaControls":"pills-three"
    },
    {
      "isName":"Logistics",
      "isLabel":"08",
      "isID":"pills-four-tab",
      "isClass": "nav-link text-center px-4 rounded-0",
      "isLink":"#pills-four",
      "isAreaControls":"pills-four"
    },
    {
      "isName":"Telecom",
      "isLabel":"08",
      "isID":"pills-five-tab",
      "isClass": "nav-link text-center px-4 rounded-0",
      "isLink":"#pills-five",
      "isAreaControls":"pills-five"
    },
    {
      "isName":"Manufacturing",
      "isLabel":"04",
      "isID":"pills-six-tab",
      "isClass": "nav-link text-center px-4 rounded-0",
      "isLink":"#pills-six",
      "isAreaControls":"pills-six"
    }
  ]

  navContents: any[] = [
    {
      "isId":"pills-one",
      "isClass": "tab-pane fade show active",
      "isData":"Content One"
    }
  ]
}
