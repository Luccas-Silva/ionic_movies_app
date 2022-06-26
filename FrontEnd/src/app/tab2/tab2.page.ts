import { FilmeDetalhePage } from './../filme-detalhe/filme-detalhe.page';
import { NavigationExtras, Router } from '@angular/router';
/* eslint-disable @typescript-eslint/member-ordering */
import { Component } from '@angular/core';
import { IFilme } from '../model/IFilme';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

   constructor(public router: Router,
                    public alertController: AlertController,
                    public toastController: ToastController) {}

  listaFilmes: IFilme[] = [
    {
      nome: 'The Boys',
      lancamento: '2019',
      duracao: '3 temporadas',
      classificacao: 10,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mY7SeH4HFFxW1hiI6cWuwCRKptN.jpg',
      generos: ['Ação'],
      favorito: false,
      sinopse: "Na trama, conhecemos um mundo em que super-heróis são as maiores celebridades do planeta, e rotineiramente abusam dos seus poderes ao invés de os usarem para o bem."
    },
    {
      nome: 'Stranger Things',
      lancamento: '2016',
      duracao: '4 temporadas',
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uKYUR8GPkKRCksczYDJb3pwZauo.jpg',
      generos: ['Aventura', 'Mistério', 'Drama'],
      favorito: false,
      sinopse: "Quando um garoto desaparece, a cidade toda participa nas buscas. Mas o que encontram são segredos, forças sobrenaturais e uma menina."
    },
    {
      nome: 'Ms. Marvel',
      lancamento: '2022',
      duracao: '1 temporadas',
      classificacao: 7,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/cdkyMYdu8ao26XOBvilNzLneUg1.jpg',
      generos: ['Aventura', 'Comédia'],
      favorito: false,
      sinopse: "Kamala Khan é uma adolescente muçulmana de Jersey City. Ela adora jogar videogames e escrever fanfictions, além de ser fã de super-heróis e ter uma imaginação sem limites – especialmente quando se trata da Capitã Marvel. Kamala sente que não se encaixa na escola e, às vezes, nem mesmo em casa. Mas um dia ela descobre que tem superpoderes como os heróis que sempre admirou... e a vida fica bem melhor com superpoderes, não é?"
    },
    {
      nome: 'Peaky Blinders: Sangue, Apostas e Navalhas',
      lancamento: '2013',
      duracao: '6 temporadas',
      classificacao: 10,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/i0uajcHH9yogXMfDHpOXexIukG9.jpg',
      generos: ['Drama', 'Crime'],
      favorito: false,
      sinopse: "Thomas Shelby e seus irmãos retornam a Birmingham depois de servir no exército britânico durante a Primeira Guerra Mundial. Os Peaky Blinders, a gangue na qual Thomas é líder, controlam a cidade de Birmingham. Mas, como as ambições de Shelby se estendem para além de Birmingham, ele planeja construir o império de negócios que criou e impedir qualquer um que atrapalhar."
    },
    {
      nome: 'Spy x Family',
      lancamento: '2022',
      duracao: '1 temporadas',
      classificacao: 9,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wJOLiZIDvtmNbOaaHxQrRGzCAEu.jpg',
      generos: ['Animação', 'Comédia', 'Action & Adventure', 'Crime'],
      favorito: false,
      sinopse: "A história acompanha um dos maiores espiões do mundo tendo que se infiltrar no país inimigo para eliminar uma figura importante do governo. Como forma de aproximação do seu alvo, ele precisa encontrar uma família, e por conta disso acaba adotando uma garota, e formando um acordo para se casar com uma mulher local.Entretanto, o que ele não imagina, é que a garota na verdade é uma esper (Um indivíduo capaz de realizar telepatia e outras habilidades paranormais.), e sua nova esposa é uma assassina de aluguel. Assim, os três começam a morar juntos, tendo que esconder suas verdadeiras identidades uns dos outros."
    },
    {
      nome: 'The Umbrella Academy',
      lancamento: '2019',
      duracao: '3 temporadas',
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qhcwrnnCnN8NE1N6XXKHFmveJR9.jpg',
      generos: ['Action & Adventure', 'Sci-Fi & Fantasy', 'Drama'],
      favorito: false,
      sinopse: "Com a morte do pai, irmãos com poderes extraordinários se reencontram e descobrem surpreendentes segredos de família – além de uma ameaça iminente à humanidade."
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
