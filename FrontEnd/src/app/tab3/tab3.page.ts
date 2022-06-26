import { FilmeDetalhePage } from './../filme-detalhe/filme-detalhe.page';
import { NavigationExtras, Router } from '@angular/router';
/* eslint-disable @typescript-eslint/member-ordering */
import { Component } from '@angular/core';
import { IFilme } from '../model/IFilme';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public router: Router,
                    public alertController: AlertController,
                    public toastController: ToastController) {}

  listaFilmes: IFilme[] = [
    {
      nome: 'Cillian Murphy',
      lancamento: 'Idade 46',
      duracao: '1976-05-25',
      classificacao: 10,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/i8dOTC0w6V274ev5iAAvo4Ahhpr.jpg',
      generos: ['Peaky Blinders', 'Batman', 'A Origem'],
      favorito: false,
      sinopse: ""
    },
    {
      nome: 'Erin Moriarty',
      lancamento: 'Idade 28',
      duracao: '1994-06-24',
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zY3ZMEXAmhU7hQO0B4Y3444rTHm.jpg',
      generos: ['The Boys ', 'Capitão Fantástico'],
      favorito: false,
      sinopse: ""
    },
    {
      nome: 'Tom Holland',
      lancamento: 'Idade 26',
      duracao: '1996-06-01',
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bBRlrpJm9XkNSg0YT5LCaxqoFMX.jpg',
      generos: ['Vingadores', 'Homem-Aranha', 'Homem-Aranha'],
      favorito: false,
      sinopse: ""
    },
    {
      nome: 'Elizabeth Olsen',
      lancamento: 'Idade 33',
      duracao: '1989-02-16',
      classificacao: 9,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wIU675y4dofIDVuhaNWPizJNtep.jpg',
      generos: ['Vingadores', 'Doutor Estranho', 'Vingadores'],
      favorito: false,
      sinopse: ""
    },
    {
      nome: 'Tom Hardy',
      lancamento: 'Idade 44',
      duracao: '1977-09-15',
      classificacao: 10,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sGMA6pA2D6X0gun49igJT3piHs3.jpg',
      generos: ['Peaky Blinders', 'Mad Max', 'Venom'],
      favorito: false,
      sinopse: ""
    },
    {
      nome: 'Dominique McElligott',
      lancamento: 'Idade 36',
      duracao: '1986-03-05',
      classificacao: 7,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/99Pbu6HYwrBcX10RDf7ttUh6fO9.jpg',
      generos: ['The boys', 'Lunar'],
      favorito: false,
      sinopse: ""
    },
    {
      nome: 'Aidan Gallagher',
      lancamento: 'Idade 18',
      duracao: '2003-09-18',
      classificacao: 10,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zwOMopF4dAAvA6Lexr2dxJ9qBlD.jpg',
      generos: ['The Umbrella Academy', 'Família Moderna'],
      favorito: false,
      sinopse: ""
    },
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
