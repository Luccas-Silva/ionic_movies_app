import { Component } from '@angular/core';
import { IFilme } from '../model/IFilme';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  listaFilmes: IFilme[] = [
  {
    nome: 'Sonic 2',
    lancamento: '07/04/2022',
    duracao: '2h02m',
    classificacao: 6,
    cartaz: 'https://br.web.img2.acsta.net/pictures/21/12/08/15/46/3923761.jpg',
    generos: ['Aventura','Comédia'],
    pagina: '/sonic',
    favorito: false
  },
  {
    nome: 'Vingadores: Ultimato',
    lancamento: '27/08/2019',
    duracao: '3h01m',
    classificacao: 9,
    cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg',
    generos: ['Aventura', 'Ficção científica', 'Ação'],
    pagina: '/avengers',
    favorito: false
  },
  {
    nome: 'Homem-Aranha: Sem Volta para Casa',
    lancamento: '16/12/2021',
    duracao: '2h28m',
    classificacao: 8,
    cartaz: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeoFKAlVEDJr4gWmlGzlK7k_fHAZ6J5riMiudyPt_rTk9YTpuO',
    generos: ['Aventura', 'Ação'],
    pagina: '/homem-aranha',
    favorito: false
  },
  {
    nome: 'Batman',
    lancamento: '03/03/2022',
    duracao: '3h5m',
    classificacao: 7,
    cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/wd7b4Nv9QBHDTIjc2m7sr0IUMoh.jpg',
    generos: ['Aventura', 'Ação'],
    pagina: '/batman',
    favorito: false
  },
  {
    nome: 'Red: Crescer é Uma Fera',
    lancamento: '10/03/2022',
    duracao: '1h40m',
    classificacao: 7,
    cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/725WE0Qb1BbUF7aGvjiQqzzffpg.jpg',
    generos: ['Animação', 'Família', 'Comédia', 'Fantasia'],
    pagina: '/red',
    favorito: false
  },
  {
    nome: 'Encanto',
    lancamento: '24/11/2021',
    duracao: '1h42m',
    classificacao: 8,
    cartaz: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeoFKAlVEDJr4gWmlGzlK7k_fHAZ6J5riMiudyPt_rTk9YTpuO',
    generos: ['Animação', 'Comédia', 'Famlia', 'Fantasia'],
    pagina: '/encanto',
    favorito: false
  },
  {
    nome: 'Arremessando Alto',
    lancamento: '03/06/2022',
    duracao: '1h58m',
    classificacao: 9,
    cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/25aPHMlZNP5F3fgxUo4XB7xUVz7.jpg',
    generos: ['Drama', 'Comédia'],
    pagina: '/arremessando-alto',
    favorito: false
  }
  ];
}
