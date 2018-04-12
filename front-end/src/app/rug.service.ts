import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Rug} from './rug';
import {Headers, Http} from '@angular/http';

@Injectable()
export class RugService {

  private host = window.location.hostname;
  private headers = new Headers({'Content-Type': 'application/json'});
  private rugsURL = `http://${this.host}:3000/rug`;

  constructor(private http: Http) { 
  };



  /**
   * Return all rugs
   * 
   */
  getRugs(): Promise<Rug[]> {
    return this.http.get(this.rugsURL)
      .toPromise()
      .then(response => {
      return response.json() as Rug[];
    })
    .catch(this.handleError);
  }

  //returns rugs based on id
  getRug(id: string): Promise<Rug> {
    const url = `${this.rugsURL}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Rug)
      .catch(this.handleError);
  }



  //Add new Rug

  add(rug: Rug): Promise<Rug>{
    return this.http.post(this.rugsURL, JSON.stringify(Rug), {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Rug)
      .catch(this.handleError)
  }


  //Update rug

  update(rug: Rug): Promise<Rug>{
    return this.http.put(`${this.rugsURL}/${rug._id}`, JSON.stringify(Rug), {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Rug)
      .catch(this.handleError)
  }


  //Remove rug

  remove(id: string): Promise<any>{
    return this.http.delete(`${this.rugsURL}/${id}`)
      .toPromise()
      .then(response => console.log(response))
      .catch(this.handleError)
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}