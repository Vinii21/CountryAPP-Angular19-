import { Component, input, output } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './country-search-input.component.html',
})
export class CountrySearchInputComponent {

   public placeholder = input.required<string>();

  public txtValueEmitter = output<string>();

  onSearch(value: string) {
    this.txtValueEmitter.emit(value);
  }
}
