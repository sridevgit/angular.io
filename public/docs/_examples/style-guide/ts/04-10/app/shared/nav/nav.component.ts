import { Component, OnInit } from 'angular2/core';

import { ModalService } from '../';

@Component({
  moduleId: module.id,
  selector: 'toh-nav',
  template: '<div>nav</div>'
})
export class NavComponent implements OnInit {

  ngOnInit() { }

  constructor(private modalService: ModalService) { }

  resetDb() { }
}
