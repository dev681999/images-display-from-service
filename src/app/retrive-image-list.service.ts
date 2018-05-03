import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RetriveImageListService {

  constructor( private http: HttpClient ) { }

  getImageList(): Observable<any> {
    return this.http.get('https://picsum.photos/list');
  }

}
