import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { NgModule } from '@angular/core';

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page'
    },
    {
      path: 'details/:id',
      component: DetailsComponent,
      title: 'Home details'
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routeConfig)],
    exports: [RouterModule]
  })
  export class AppRouteConfigModule { }