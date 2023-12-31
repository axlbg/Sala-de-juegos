import { Component } from '@angular/core';
import { ApiPaisesService } from 'src/app/services/api-paises.service';
import { AutentificadorService } from 'src/app/services/autentificador.service';
import { MensajeInfoService } from 'src/app/services/mensaje-info.service';
import { EstadisticasService } from 'src/app/services/estadisticas.service';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.css'],
})
export class PreguntadosComponent {
  user: any = null;
  listOfCountries: any = [];
  listOfQuestions: any = [];
  victory: boolean = false;
  activeGame: boolean = false;
  gameOver: boolean = false;
  gameOverText: string = '¡PERDISTE!';
  score: number = 0;
  attempts: number = 10;
  currentQuestion: any = null;
  loadedQuestions: boolean = false;
  currentIndex: number = 0;
  correctAnswer: boolean = false;
  wrongAnswer: boolean = false;

  constructor(
    private apiPaises: ApiPaisesService,
    private mensajeInfo: MensajeInfoService,
    private auth: AutentificadorService,
    private estadisticas: EstadisticasService
  ) {
    this.apiPaises.getPaises();
  }

  ngOnInit(): void {
    this.inciar();
  }

  async inciar() {
    const paises = await this.apiPaises.getPaises();
    const listaDePaises = paises.map((country: any) => {
      return {
        name: country.translations.spa.official,
        flag: country.flags.png,
      };
    });
    this.listOfCountries = listaDePaises;
    this.startGame();
  }

  startGame() {
    this.generateQuestions();
    this.currentQuestion = this.listOfQuestions[this.currentIndex];
    this.activeGame = true;
    this.mensajeInfo.emitChange('Juego iniciado');
  } // end of startGame

  generateQuestions() {
    this.listOfCountries.sort(() => Math.random() - 0.5);
    this.listOfQuestions = this.listOfCountries
      .slice(0, 10)
      .map((country: any) => {
        const option2 = this.listOfCountries[this.generateRandomNumber()].name;
        const option3 = this.listOfCountries[this.generateRandomNumber()].name;
        const option4 = this.listOfCountries[this.generateRandomNumber()].name;
        const options = [country.name, option2, option3, option4].sort(
          () => Math.random() - 0.5
        );
        return {
          answer: country.name,
          options: options,
          flag: country.flag,
        };
      });
    this.loadedQuestions = true;
  } // end of generateQuestions

  generateRandomNumber() {
    return Math.floor(Math.random() * 249);
  } // end of generateRandomNumber

  play(option: string, event: Event) {
    if (this.activeGame) {
      const btn = <HTMLButtonElement>event.target;
      btn.disabled = true;
      if (option === this.currentQuestion.answer) {
        this.score++;
        this.correctAnswer = true;
        setTimeout(() => {
          this.correctAnswer = false;
        }, 300);
        this.mensajeInfo.emitChange('RESPUESTA CORRECTA');
      } else {
        this.wrongAnswer = true;
        setTimeout(() => {
          this.wrongAnswer = false;
        }, 300);

        this.mensajeInfo.emitChange(`Nooo! era ${this.currentQuestion.answer}`);
      }

      if (this.currentIndex < 9) {
        this.currentIndex++;
        setTimeout(() => {
          this.currentQuestion = this.listOfQuestions[this.currentIndex];
        }, 500);
      }

      if (this.attempts > 0) {
        this.attempts--;
        if (this.attempts === 0) {
          this.activeGame = false;
          this.gameOver = true;
          if (this.score >= 4) {
            this.victory = true;
            this.gameOverText = '¡GANASTE!';

            this.mensajeInfo.emitChange('¡GANASTE!');
          } else {
            this.mensajeInfo.emitChange(
              '¡PERDISTE! No hay nadie peor que vos.'
            );
          }
          this.estadisticas.guardarPreguntados(
            this.auth.userName,
            this.victory,
            this.score
          );
        }
      }
    }
  } // end of play

  restartGame() {
    this.generateQuestions();
    this.currentIndex = 0;
    this.score = 0;
    this.attempts = 10;
    this.activeGame = true;
    this.victory = false;
    this.gameOver = false;
    this.gameOverText = '¡PERDISTE!';
    this.currentQuestion = this.listOfQuestions[this.currentIndex];
    this.mensajeInfo.emitChange('Juego reiniciado');
  }
}
