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
      sinopse: "Cillian Murphy é um ator e músico irlandês de teatro, cinema e televisão. Desde que estreou em seu país de origem no final da década de 90, Murphy também se tornou uma presença em cinemas britânicos e americanos."
    },
    {
      nome: 'Erin Moriarty',
      lancamento: 'Idade 28',
      duracao: '1994-06-24',
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zY3ZMEXAmhU7hQO0B4Y3444rTHm.jpg',
      generos: ['The Boys ', 'Capitão Fantástico'],
      favorito: false,
      sinopse: "Erin Moriarty é uma atriz americana. Ela teve papéis recorrentes na série de televisão One Life to Live e True Detective, foi uma série regular de Viúva Vermelha e Jessica Jones e atuou como coadjuvante em vários filmes."
    },
    {
      nome: 'Tom Holland',
      lancamento: 'Idade 26',
      duracao: '1996-06-01',
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bBRlrpJm9XkNSg0YT5LCaxqoFMX.jpg',
      generos: ['Vingadores', 'Homem-Aranha', 'Homem-Aranha'],
      favorito: false,
      sinopse: "Thomas ou Tom Holland é um ator e dançarino inglês, mais conhecido por interpretar o papel principal em Billy Elliot the Musical no Victoria Palace Theatre, Londres, bem como para estrelar o filme de 2012 O Impossível. Por último papel, ele se tornou um vencedor do Hollywood Spotlight Award, bem como do National Board of Review’s award no Breakthrough Actor categoria do London Film Critics Circle Awards 2012 em “Young British Performer of the Year”. Ele foi destaque em no Screen International’s “UK Stars of Tomorrow – 2012” e em Variety’s “Youth Impact Report 2012”."
    },
    {
      nome: 'Elizabeth Olsen',
      lancamento: 'Idade 33',
      duracao: '1989-02-16',
      classificacao: 9,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wIU675y4dofIDVuhaNWPizJNtep.jpg',
      generos: ['Vingadores', 'Doutor Estranho', 'Vingadores'],
      favorito: false,
      sinopse: "É uma atriz norte-americana. Elizabeth é a irmã mais nova das também atrizes Mary-Kate Olsen e Ashley Olsen.Elizabeth nasceu em Sherman Oaks, Califórnia em 1989, também chamada de Lizzie, é irmã de duas famosas atrizes, as gêmeas Mary-Kate e Ashley Olsen e de Trent Olsen . Graduou-se na Universidade de Nova York Tisch School of the Arts e Atlantic Theater Company Acting School, em Nova York. Se dedica à carreira de atriz e já atuou em muitas das produções das irmãs mais velhas."
    },
    {
      nome: 'Tom Hardy',
      lancamento: 'Idade 44',
      duracao: '1977-09-15',
      classificacao: 10,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sGMA6pA2D6X0gun49igJT3piHs3.jpg',
      generos: ['Peaky Blinders', 'Mad Max', 'Venom'],
      favorito: false,
      sinopse: "Tom Hardy, nome artistico de Edward Thomas Hardy é um ator, produtor e roteirista britânico conhecido pelos seus papéis em filmes como A Origem, Batman: O Cavaleiro das Trevas Ressurge, Mad Max: Estrada da Fúria e Venom e também na série Peaky Blinders. Em 2016 foi indicado ao Óscar de melhor ator secundário pelo filme O Regresso."
    },
    {
      nome: 'Dominique McElligott',
      lancamento: 'Idade 36',
      duracao: '1986-03-05',
      classificacao: 7,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/99Pbu6HYwrBcX10RDf7ttUh6fO9.jpg',
      generos: ['The boys', 'Lunar'],
      favorito: false,
      sinopse: "Dominique McElligott (born 5 March 1986, height 5' 8' 1,73 m is an Irish television and film actress, appearing primarily in independent films. She starred in Moon alongside Sam Rockwell as well as the RTÉ series Raw before leaving to film Leap Year. She also played the female lead role in the AMC Western series Hell on Wheels."
    },
    {
      nome: 'Aidan Gallagher',
      lancamento: 'Idade 18',
      duracao: '2003-09-18',
      classificacao: 10,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zwOMopF4dAAvA6Lexr2dxJ9qBlD.jpg',
      generos: ['The Umbrella Academy', 'Família Moderna'],
      favorito: false,
      sinopse: "Aidan Gallagher (born September 18, 2003) is an American actor, best known for his role as Nicky Harper on the Nickelodeon series Nicky, Ricky, Dicky and Dawn (2014-2018)."
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
