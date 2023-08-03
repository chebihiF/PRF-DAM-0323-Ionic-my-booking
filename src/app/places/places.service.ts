import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of New York City.',
      'https://imgs.6sqft.com/wp-content/uploads/2014/06/21042533/Carnegie-Mansion-nyc.jpg',
      149.9
    ),
    new Place(
      'p2',
      'L\'Amour Toujours',
      'A romantic place in Paris',
      'https://miro.medium.com/v2/resize:fit:1200/1*t-nXIcaD3oP6CS4ydXV1xw.jpeg',
      189.9
    ),
    new Place(
      'p3',
      'The Foggy Palace',
      'Not your average city trip',
      'https://tangiyoga.files.wordpress.com/2015/04/castle-in-fog.jpg',
      99.9
    )
  ];

  get places() {
    return this._places;
  }

  getPlace(id: string){
    return this.places.find(p => p.id === id)
  }

  constructor() { }
}
