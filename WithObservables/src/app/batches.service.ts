import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { batches} from './batches';   // Interface aahe
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BatchesService 
{
  // data joh hota toh hya url la thevla ->
  // Hya url madhun data aanayacha
  private url = "/assets/data/batchesdb.json";
  
  constructor(private http : HttpClient) { }

  public GetBatches() : Observable<batches[]>
  {
    // url aahe ti get method la pathvli -> utl madhun data aanar
    // data ha batches hya format madhe bhetel -> batches Interface varun kalala
    // <batches[]> typecase -> batches array madhe typecase kela
    return this.http.get<batches[]>(this.url);
  }
}

