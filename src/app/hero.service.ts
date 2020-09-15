import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    // Todo: send the message after retrieving the heroes
    this.messageService.add('HeroService: Heroes fetched');
    // tslint:disable-next-line:deprecation
    return of(HEROES);
  }
}
