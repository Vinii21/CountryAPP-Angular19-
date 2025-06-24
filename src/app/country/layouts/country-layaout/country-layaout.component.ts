import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenuComponent } from "../../components/top-menu/top-menu.component";

@Component({
  selector: 'country-layaout',
  imports: [RouterOutlet, TopMenuComponent],
  templateUrl: './country-layaout.component.html',
})
export class CountryLayaoutComponent {

}
