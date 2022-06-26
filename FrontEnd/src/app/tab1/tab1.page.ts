import { FilmeDetalhePage } from './../filme-detalhe/filme-detalhe.page';
import { NavigationExtras, Router } from '@angular/router';
/* eslint-disable @typescript-eslint/member-ordering */
import { Component } from '@angular/core';
import { IFilme } from '../model/IFilme';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public router: Router,
                    public alertController: AlertController,
                    public toastController: ToastController) {}

  listaFilmes: IFilme[] = [
    {
      nome: 'Doutor Estranho no Multiverso da Loucura',
      lancamento: '05/05/2022',
      duracao: '2h6m',
      classificacao: 5,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/boIgXXUhw5O3oVkhXsE6SJZkmYo.jpg',
      generos: ['Ação', 'Fantasia', 'Aventura'],
      favorito: false
    },
    {
      nome: 'Animais Fantásticos: Os Segredos de Dumbledore',
      lancamento: '14/04/2022',
      duracao: '1h50m',
      classificacao: 6,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/gopGghuMtmdMviBcl9G0JfVB2RZ.jpg',
      generos: ['Ação', 'Fantasia', 'Aventura'],
      favorito: false
    },
    {
      nome: 'Sonic 2',
      lancamento: '07/04/2022',
      duracao: '2h2m',
      classificacao: 7,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/f4SvCKIUrC2cDR7Xo4k1kaGAqQ2.jpg',
      generos: ['Ação', 'Aventura', 'Família', 'Comédia'],
      favorito: false
    },
    {
      nome: 'Homem-Aranha: Sem Volta Para Casa',
      lancamento: '16/12/2021',
      duracao: '2h29m',
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg',
      generos: ['Ação', 'Aventura', 'Ficção científica'],
      favorito: false
    },
    {
      nome: 'Red: Crescer é Uma Fera',
      lancamento: '10/03/2022',
      duracao: '1h50m',
      classificacao: 7,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/725WE0Qb1BbUF7aGvjiQqzzffpg.jpg',
      generos: ['Animação', 'Família', 'Comédia', 'Fantasia'],
      favorito: false
    },
    {
      nome: 'Lightyear',
      lancamento: '16/06/2022',
      duracao: '1h47m',
      classificacao: 7,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/wc3cGQUF4P2Jetawf7YqzaWQsNc.jpg',
      generos: ['Animação', 'Ficção científica', 'Aventura', 'Ação', 'Família'],
      favorito: false
    },
    {
      nome: 'Vingadores: Ultimato (2019)',
      lancamento: '25/04/2019 (BR)',
      duracao: '3h01m',
      classificacao: 6,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg',
      generos: ['Aventura', 'Ficção científica', 'Ação'],
      pagina: '/avengers',
      favorito: false
    }
  ];
  exibirFilme(filme: IFilme){
    const navigationExtras: NavigationExtras = {state:{paramFilme:filme}};
    this.router.navigate(['filme-detalhe'],navigationExtras);
  }

  async exibirAlertaFavorito(filme: IFilme) {
    const alert = await this.alertController.create({

      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            filme.favorito=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            filme.favorito=true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos...',
      duration: 2000,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }
}
