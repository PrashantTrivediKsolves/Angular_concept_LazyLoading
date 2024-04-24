import { Injectable } from '@angular/core';

import {dataType} from './user'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  getData()
  {
    const data:dataType={

      name:"prashant kumar",

      id:100,
      indian:true,

      address:"kanpur up"
    }
    return data;
  }
}
