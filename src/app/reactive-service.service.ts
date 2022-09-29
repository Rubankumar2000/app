import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ReactiveServiceService{

  constructor(private http: HttpClient) { }

  url='https://jsonplaceholder.typicode.com/users';
  postDetail(detail: any){
    return this.http.post(this.url,detail)
  }
}
