import { Country } from './Country.';
import { Region } from './region.type';
export interface CacheStore {
ByCapital:TermCountry,
ByCountry:TermCountry,
ByRegion:RegionCountry

}

export interface TermCountry{
  term:string,
  Countries:Country[]
}

export interface RegionCountry{
  region?:Region,
  Countries:Country[]
}
