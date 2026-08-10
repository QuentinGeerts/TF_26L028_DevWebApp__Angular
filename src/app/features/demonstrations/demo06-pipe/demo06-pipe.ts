import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared-module';



@Component({
  selector: 'app-demo06-pipe',
  imports: [
    FormsModule,
    SharedModule // Utilisation d'un module pour regrouper les imports 
    
    // CommonModule, // Common Module Permet d'avoir accès à tous les pipes de base
    // EmojiPipePipe // Lorsqu'on crée un pipe il faut l'importer
  ],
  templateUrl: './demo06-pipe.html',
  styleUrl: './demo06-pipe.css',
})
export class Demo06Pipe {

  // Valeur pour les pipes string
message : string = "Bonjour, je suis un message à transformer avec un Pipe !";

messageSignal = signal("Bonjour, je suis un message signal à transformer avec un Pipe !");


// valeurs pour les pipes number
valeur : number = 123456.789;

valeurSignal = signal(123456.789);

// valeur pour les dates

date : Date = new Date();

dateSignal = signal(new Date());

// valeur Json pour afficher 

informationJson = {
  name : "John Doe",
  age : 30,
  email : "johnDoe@mail.com",
  city : "Paris",
}

// pipe personnalisé
valeuremoji : string = "Entrez une valeur"

}
