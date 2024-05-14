import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styles: ``
})
export class UncommonPageComponent {

  // i18n Select
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

}
