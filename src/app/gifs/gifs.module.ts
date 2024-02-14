import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [GifsPageComponent, SearchComponent, ResultsComponent],
  exports: [GifsPageComponent],
  imports: [CommonModule, FormsModule],
})
export class GifsModule {}
