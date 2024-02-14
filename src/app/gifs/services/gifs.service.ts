import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey: string = 'PGmYXZbosQjEnT84STiVyHHHCkUFKtNO';
  private _history: string[] = [];
  //cambiar any por su tipo
  public results: any[] = [];

  get history() {
    return [...this._history];
  }

  constructor(private http: HttpClient) {}

  searchGifs(query: string) {
    query = query.trim().toLowerCase();
    if (!this._history.includes(query)) {
      this._history = [query, ...this.history.slice(0, 9)];
    }
    this.http.get(
      `https://api.giphy.com/v1/gifs/search?api_key=PGmYXZbosQjEnT84STiVyHHHCkUFKtNO&q=${query}&limit=16`
    )
    //cambiar any por su tipo
    .subscribe((resp : any) => {
      this.results = resp.data;
      console.log(resp.data);
    })
  }


}
