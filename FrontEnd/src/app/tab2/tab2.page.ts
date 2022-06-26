import { Component } from '@angular/core';
import { ISeries } from '../model/ISeries';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  listaSeries: ISeries[] = [
    {
      nome: 'The Boys',
      lancamento: '2019',
      duracao: '3 temporadas',
      classificacao: 10,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/mY7SeH4HFFxW1hiI6cWuwCRKptN.jpg',
      generos: ['Ação'],
      pagina: '/the-boys',
      favorito: false
    },
    {
      nome: 'Stranger Things',
      lancamento: '2016',
      duracao: '4 temporadas',
      classificacao: 9,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/uKYUR8GPkKRCksczYDJb3pwZauo.jpg',
      generos: ['Drama', 'Fantasy', 'Mistério'],
      pagina: '/stranger-things',
      favorito: false
    },
    {
      nome: 'Peaky Blinders',
      lancamento: '2013',
      duracao: '6 temporadas',
      classificacao: 10,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/i0uajcHH9yogXMfDHpOXexIukG9.jpg',
      generos: ['Drama','Crime'],
      pagina: '/peaky-blinders',
      favorito: false
    },
  ]

}
