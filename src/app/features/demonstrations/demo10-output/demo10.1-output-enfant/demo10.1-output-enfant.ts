import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo10-output-enfant',
  imports: [FormsModule],
  templateUrl: './demo10.1-output-enfant.html',
  styleUrl: './demo10.1-output-enfant.css',
})
export class Demo101OutputEnfant {

@Output() emitValue = new EventEmitter<string>();

valeurEnfant : string = '';

envoieValeur(){
  this.emitValue.emit(this.valeurEnfant)
}

// output nouvelle syntaxe (signal)

emmeteurSignal = output<string>()

valeurOutputSignal : string = '';

envoieValeurSignal(){
this.emmeteurSignal.emit(this.valeurOutputSignal)
}

}
