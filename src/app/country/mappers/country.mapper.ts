import { Country } from '../interfaces/country.interface';
import { RESTCountry } from "../interfaces/RESTCountry.interfaces";

export class countryMapper {

  static RESTcountriesToCountries (countrie: RESTCountry): Country {
    return {
      code: countrie.idd.root + countrie.idd.suffixes[0],
      icon: countrie.flag,
      flag: countrie.flags.svg,
      name: countrie.name.common,
      officialName: countrie.name.official,
      capital: countrie.capital[0],
      population: countrie.population
    }
  }

  static mapCountriesToCountriesArray(countries: RESTCountry[]): Country[] {
    return countries.map(this.RESTcountriesToCountries);
  }
}
