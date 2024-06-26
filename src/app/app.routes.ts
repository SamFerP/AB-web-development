import { Routes } from '@angular/router';
import { MainJorgeComponent } from './pages/jorge/main-jorge/main-jorge.component';
import { HomeComponent } from './shared/home/home.component';
import { MainCarlosComponent } from './pages/carlos/main-carlos/main-carlos.component';
import { MainAdrianComponent } from './pages/adrian/main-adrian/main-adrian.component';
import { MainRamonComponent } from './pages/ramon/main-ramon/main-ramon.component';
import { MainMarcoComponent } from './pages/marco/main-marco/main-marco.component';
import { MainSebasComponent } from './pages/sebas/main-sebas/main-sebas.component';
import { MainIbraComponent } from './pages/ibra/main-ibra/main-ibra.component';
import { MainOubaidComponent } from './pages/oubaid/main-oubaid/main-oubaid.component';
import { MainMarcosbcComponent } from './pages/marcosbc/main-marcosbc/main-marcosbc.component';
import { MainSamanthaComponent } from './pages/samantha/main-samantha/main-samantha.component';


export const routes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'jorge', component: MainJorgeComponent
    },
  {
        path: 'adrian', component: MainAdrianComponent
    },
    {
        path: 'ramon', component: MainRamonComponent
      },
    {
        path: 'marco', component: MainMarcoComponent
       },
    {
        path: 'sebas', component: MainSebasComponent
    },
    {
        path: 'marcos', component: MainMarcosbcComponent
    },
    {
        path: 'ibra', component: MainIbraComponent
    },
    {
        path: 'oubaid', component: MainOubaidComponent
    },
    {
        path: 'carlos', component: MainCarlosComponent
    },
    {
        path: 'samantha', component: MainSamanthaComponent
    },
];
