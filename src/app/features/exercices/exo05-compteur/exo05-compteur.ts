import { Component, signal } from '@angular/core';
import { CountPipe } from './count-pipe';

@Component({
  selector: 'app-exo05-compteur',
  imports: [ CountPipe],
  templateUrl: './exo05-compteur.html',
  styleUrl: './exo05-compteur.css',
})
export class Exo05Compteur {


  // Sans pipe --------------------------------------------
  // valeur pour la gestion du compteur
  minutes = signal(0);
  secondes = signal(55);
  
  // interval va enregistrer l'action à effectuer à une certaine récurence
  interval : any = null;
  
  // booléen en cours
  countActive = signal(false)
  
  resetOk = signal(false)
  
  start(){
    if(!this.interval){
      this.countActive.set(true)
      this.resetOk.set(true)

      // création de l'interval toute les 1s on incrémente les secondes
      // à 59s on incrémente les minutes et on reinitialise les secondes
      this.interval = setInterval(() => {
        
        if(this.secondes() === 59){
          this.minutes.update( (m) => m + 1);
          this.secondes.set(0);
        }else{
          this.secondes.update((s) => s + 1);
        }

      }, 1000) // délai
    }
  }

  pause(){
    // nettoie l'interval
    clearInterval(this.interval);
    this.interval = null;

    this.countActive.set(false)
  }
  
  reset(){
    // appel de pause pour ne pas réecrire le code
    this.pause();
    
    // reinitialisation des valeurs
    this.secondes.set(0);
    this.minutes.set(0);
    
    this.countActive.set(false)
    this.resetOk.set(false)
  }
  // Avec pipe --------------------------------------------

  secondesPipe = signal(55)
  intervalPipe : any = null;

  startPipe(){
    if(!this.intervalPipe){

      this.intervalPipe = setInterval( () => {

        this.secondesPipe.update((s) => s + 1)
      }, 1000)
    }
  }

  pausePipe(){
    clearInterval(this.intervalPipe)
    this.intervalPipe = null;
  }

  resetPipe(){
    this.pause();
    this.secondesPipe.set(0)
  }

}
