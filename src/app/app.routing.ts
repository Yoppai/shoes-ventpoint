//Importar modulos del router 
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar Componentes
import { AppComponent } from './app.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';

//Array de rutas
const appRoutes: Routes = [
    { path: '', component: AppComponent },
    { path: 'inicio', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegisterComponent },
    { path: 'inventario', component: InventarioComponent },
    { path: '**', component: AppComponent }
];


//Exportar Configuracion
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);