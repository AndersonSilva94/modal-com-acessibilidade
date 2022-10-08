import { ApplicationRef, ComponentRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BodyInjectorService {

  constructor(
    private appRef: ApplicationRef // dá acesso a aplicação como um todo
  ) { }

  public stackBeforeAppRoot(componentRef: ComponentRef<any>): void {
    const domElement = this.createDomElement();
    const appRoot = document.body.querySelector('app-root');
    document.body.insertBefore(domElement, appRoot)
  }

  private createDomElement(): HTMLElement {
    return null;
  }
}
