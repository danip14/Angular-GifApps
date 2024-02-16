import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent {
  constructor(private gifsService: GifsService) {}

  gifId: string = '';

  // Abre la URL en una nueva pestaña
  openSource(url: string) {
    window.open(url, '_blank');
  }

  // Descarga el GIF utilizando la función downloadFile
  downloadGif(url: string) {
    this.downloadFile(url, 'gif.gif');
  }

  // Descarga el archivo utilizando la API fetch y crea un enlace temporal para la descarga
  downloadFile(url: string, fileName: string) {
    fetch(url)
      .then((response) => response.blob()) // Obtiene el archivo como un blob
      .then((blob) => {
        const url = window.URL.createObjectURL(blob); // Crea una URL para el blob
        const a = document.createElement('a'); // Crea un elemento <a> para el enlace de descarga
        a.href = url; // Establece la URL del enlace
        a.download = fileName; // Establece el nombre de archivo para la descarga
        document.body.appendChild(a); // Agrega el enlace al cuerpo del documento
        a.click(); // Simula un clic en el enlace para iniciar la descarga
        window.URL.revokeObjectURL(url); // Libera la URL del blob
        document.body.removeChild(a); // Elimina el enlace del cuerpo del documento
      });
  }

  get results() {
    return this.gifsService.results; // Retorna los resultados del servicio de GIFs
  }
}
