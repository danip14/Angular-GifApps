import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey: string = 'PGmYXZbosQjEnT84STiVyHHHCkUFKtNO';
  private apiUrl: string = 'https://api.giphy.com/v1/gifs';
  private _history: string[] = [];

  //cambiar any por su tipo
  public results: Gif[] = [];

  get history() {
    return [...this._history];
  }

  constructor(private http: HttpClient) {
    this._history = JSON.parse(localStorage.getItem('history')!) || [];
    this.results = JSON.parse(localStorage.getItem('results')!) || [];
  }

  searchGifs(query: string) {
    query = query.trim().toLowerCase();
    if (!this._history.includes(query)) {
      this._history = [query, ...this.history.slice(0, 9)];
      localStorage.setItem('history', JSON.stringify(this._history)); //'history' es una llave de tipo string para el array, / json stringify convierte el array en string
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query);

    this.http
      .get<SearchGifsResponse>(`${this.apiUrl}/search`, { params })
      //cambiar any por su tipo
      .subscribe((resp) => {
        this.results = resp.data;
        localStorage.setItem('results', JSON.stringify(this.results));
      });
  }
}
