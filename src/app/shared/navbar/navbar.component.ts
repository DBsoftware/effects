import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor( public router: Router ) { }

  ngOnInit() {
  }

  irUsuario(value: string) {
    if (value) {
      this.router.navigate(['/usuario', value]);
    }
    return;
  }

}
