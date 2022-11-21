import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('Ejemplos de pruebas', () => {
  let page: AppPage;

  //configuración del testing 
  beforeEach(() => {
    page = new AppPage();
  });

  //testing a unidades de codigo
  it('Boton Inicio sesion', async () => {
    await page.navigateTo();
    expect(page.getButtonInicio()).toEqual('Iniciar Sesión');
  })
/*
  it('Prueba 2', async () => {
   await page.navigateTo();
    expect(await page.getTitleTextH2()).toEqual('Hola Mundo');
  });

  it('Prueba 3', async () => {
    await page.navigateTo();
     expect(await page.getTitlePar()).toEqual('Hola como estas?');
   });

*/
});
