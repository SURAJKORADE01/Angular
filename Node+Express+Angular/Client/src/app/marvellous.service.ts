import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MarvellousService
{
  public url = "http://localhost:8000/getBatches";

  //  DI of HTTP
  public constructor(private http : HttpClient) { }

  public getBatches() 
  {
    // It connect with Node_Express server
    return this.http.get(this.url);
  }
}
