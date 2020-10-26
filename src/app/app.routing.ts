//Importar modulos del router 
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar Componentes
import { AppComponent } from './app.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { ListproductsComponent } from './components/listproducts/listproducts.component';
import { UpdateproductComponent } from './components/updateproduct/updateproduct.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { from } from 'rxjs';

//Array de rutas
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'inicio', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegisterComponent },
    { path: 'inventario', component: InventarioComponent },
    { path: 'inventario/addproduct', component: AddproductComponent },
    { path: 'inventario/listproducts', component: ListproductsComponent },
    { path: 'inventario/updateproduct', component: UpdateproductComponent },
    { path: '**', component: HomeComponent }
];


//Exportar Configuracion
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);