import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styles: ``
})
export class UncommonPageComponent {

  // i18nSelect
  public name: string = 'Eduardo';
  public gender: 'male'|'female' = 'male';
  public inivationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient(): void {
    this.name = 'Sandra';
    this.gender = 'female';
  }

  // i18nPlural
  public clients: string[] = ['Maria', 'Pedro', 'Eduardo', 'Sandra', 'Uriel', 'Ramon',
                              'Fernando', 'Paco', 'Natalia', 'Nohemi', 'Ulises'];

  public clientMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    '=2': 'tenemos 2 esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  deleteClient(): void{
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Eduardo',
    age: 24,
    address: 'León, México'
  }

  // Async Pipe

  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log(value)
     )
  );

  public promiseValue = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa')
      console.log('Tenemos data en la promesa');
      
    }, 3500)
  })



}
