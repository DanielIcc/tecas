import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  public loading: boolean = false;
  
  constructor() { }
}
