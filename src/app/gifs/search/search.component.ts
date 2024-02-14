import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  constructor(private gifsService: GifsService) {}

  search: string = '';

  onSubmit(): void {
    const trimmedSearch = this.search.trim();
    if (trimmedSearch.length > 0 && trimmedSearch.length <= 25) {
      this.gifsService.searchGifs(trimmedSearch);
      this.search = '';
    } else if (trimmedSearch.length > 25) {
      this.search = trimmedSearch.substring(0, 24) + '...';
      this.gifsService.searchGifs(this.search);
      this.search = '';
    }
  }
}
