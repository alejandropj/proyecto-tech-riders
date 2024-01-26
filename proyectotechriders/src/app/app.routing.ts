import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AcreditarcharlaComponent } from './components/acreditarcharla/acreditarcharla.component';
import { AltaempresaComponent } from './components/altaempresa/altaempresa.component';
import { AltausuarioComponent } from './components/altausuario/altausuario.component';
import { AniadirtecnologiaComponent } from './components/aniadirtecnologia/aniadirtecnologia.component';
import { CalendarioTechRidersCharlasComponent } from './components/calendario-tech-riders-charlas/calendario-tech-riders-charlas.component';
import { CharlasTechRidersComponent } from './components/charlas-tech-riders/charlas-tech-riders.component';
import { CharlasprofesorComponent } from './components/charlasprofesor/charlasprofesor.component';
import { ContactarAdminComponent } from './components/contactar-admin/contactar-admin.component';
import { CrearempresaResponsableComponent } from './components/crearempresa-responsable/crearempresa-responsable.component';
import { DetallescharlaComponent } from './components/detallescharla/detallescharla.component';
import { EditarcharlaComponent } from './components/editarcharla/editarcharla.component';
import { EditarcursosComponent } from './components/editarcursos/editarcursos.component';
import { EditartecnologiastechriderComponent } from './components/editartecnologiastechrider/editartecnologiastechrider.component';
import { EditarusuarioComponent } from './components/editarusuario/editarusuario.component';
import { HomeComponent } from './components/home/home.component';
import { ListadocentrosComponent } from './components/listadocentros/listadocentros.component';
import { ListadosComponent } from './components/listados/listados.component';
import { ListadosempresaComponent } from './components/listadosempresa/listadosempresa.component';
import { ListadotrComponent } from './components/listadotr/listadotr.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { MischarrlasTechridersComponent } from './components/mischarrlas-techriders/mischarrlas-techriders.component';
import { MistechridersResponsableComponent } from './components/mistechriders-responsable/mistechriders-responsable.component';
import { ModificarcontrasenyaComponent } from './components/modificarcontrasenya/modificarcontrasenya.component';
import { PanelPeticionesAdminComponent } from './components/panel-peticiones-admin/panel-peticiones-admin.component';
import { PerfilusuarioComponent } from './components/perfilusuario/perfilusuario.component';
import { ProponerTecnologiaComponent } from './components/proponer-tecnologia/proponer-tecnologia.component';
import { RegisterusuarioComponent } from './components/registerusuario/registerusuario.component';
import { SolicitarcharlaComponent } from './components/solicitarcharla/solicitarcharla.component';
import { ValoracioncharlaComponent } from './components/valoracioncharla/valoracioncharla.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'usuario/perfil', component: PerfilusuarioComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'editar-usuario', component: EditarusuarioComponent },
  {
    path: 'usuario/editar-tecnologias',
    component: EditartecnologiastechriderComponent,
  },
  {
    path: 'usuario/modificar-contrasenya',
    component: ModificarcontrasenyaComponent,
  },
  { path: 'registrar-usuario', component: RegisterusuarioComponent },
  { path: 'usuario/editar-cursos', component: EditarcursosComponent },
  { path: 'charlas/mis-charlas', component: CharlasprofesorComponent },
  { path: 'charlas/solicitar-charla', component: SolicitarcharlaComponent },
  { path: 'charlas/:idcharla', component: DetallescharlaComponent },
  { path: 'charlas/editar/:idcharla', component: EditarcharlaComponent },
  { path: 'listados', component: ListadosComponent },
  { path: 'listadostr', component: ListadotrComponent },
  { path: 'listadoscentros', component: ListadocentrosComponent },
  { path: 'listadosempresas', component: ListadosempresaComponent },
  { path: 'altausuario', component: AltausuarioComponent },
  { path: 'acreditarcharla', component: AcreditarcharlaComponent },
  { path: 'aniadirtecnologia', component: AniadirtecnologiaComponent },
  { path: 'altaempresa', component: AltaempresaComponent },
  {
    path: 'charlas/valoracion/:idcharla',
    component: ValoracioncharlaComponent,
  },
  { path: 'proponertecno', component: ProponerTecnologiaComponent },
  { path: 'contactadmin', component: ContactarAdminComponent },
  { path: 'charlastechriders', component: CharlasTechRidersComponent },
  { path: 'mischarlastech', component: MischarrlasTechridersComponent },
  { path: 'crearempresa', component: CrearempresaResponsableComponent },
  {
    path: 'mischarlastechridersresponsable',
    component: MistechridersResponsableComponent,
  },
  {
    path: 'calendariomitechrider',
    component: CalendarioTechRidersCharlasComponent,
  },
  { path: 'peticiones', component: PanelPeticionesAdminComponent },
];

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
