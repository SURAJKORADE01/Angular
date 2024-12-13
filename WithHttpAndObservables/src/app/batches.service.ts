// Server kadun direct data ha Component gheu nahi shakat karan 
// Server is Outside entity
// Component is such a entity which is used to interact with end user 
// Component can't communicate entity which is Outside
// That's why Component has to interact with the such an entity which is capable of communicating with Outside entity 
// And that entity is service 

import { Injectable } from '@angular/core';   // automatic aasta decorator sathi
import { HttpClient } from '@angular/common/http'; // Http ha Client side la lagnaar manun HttpClient import kel -> kashasathi import karto -> server la connect karnya sathi
import { batches } from './batches';  // rikama taat -> interface import kela -> yenara data kasa aahe hai sangnyasathi
import { Observable } from 'rxjs';  // To use observable, we have to use third party library called -> Reactive Extensions (rxjs)

// @Injectable -> class cha obejct create karun dusrya class chya constructor la as a parameter deu shakto
@Injectable({
  providedIn: 'root'
})

export class BatchesService 
{
  private url = "/assets/data/batchesdb.json";  // database path -> Instead of this path -> MongoDB path
  
  public constructor(private http : HttpClient) { 
                    // DI aahe -> HttpClient chya Module cha DI aahe          
  }  
                        
  //                    yenare data ha batches array madhe transform kela -> interface -> rikama taat bharun aala
  //     return value : Observable<batches[]> -> Observable which is array of batches
  public GetBatches() : Observable<batches[]> // typecast -> yenara data array of batches 
  {
    // http -> object -> tyat li get method call keli -> data ha this.url madhun aan
    // <batches[]> -> yenara data ha typecase kela into array of batches -> karan yenara data ha sequence of bytes madhe yeto tyala tukde karun ghetla 
    return this.http.get<batches[]>(this.url);
  }
}

// Constructor chya aat lihila tr te DI hota 

// Service madhe HttpClient navacha component ghustoy/inject hotoy
// Service hi BatchDetails aani BatchList madhe inject hote

// 3 Dependency Injection -> 
// 1-> Service 
// 2-> BatchDetails
// 3-> BatchList

// Service la suddha baherun kahi tari lagnare which is HttpClient
// HttpClient -> Jevva client application la swatacha application sodun baher jaicha aasel tr i.e server kade
// tr te madat ghetat -> konachi -> Protocal -> http

// http is only one protocal in which any client side application can interact with the server.
// http pahije client side la -> manun HttpClient 
// aani hyala service madhe inject kela

// get API la call kela -> get navacha function http kadun aala 
// get la sangtoy kahi tari gheun ye

// get -> data gheun ye -> kuthun -> this.utl hya path varun 

// By using the concepy of HTTP Client and Observable our Angular Application 
// can send request to the server and server will send response as Observable.

// Observable -> Observable is an array whose arrives Asynchrously over time.
// Observable help to manage Asynchrously data, as data is coming from backend service and server.

// Observable are used within Angular itself, including Angular's event systems and its HTTP client service.

