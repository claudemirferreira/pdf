import { TicketDetailComponent } from './components/ticket-detail/ticket-detail.component';
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/security/login/login.component";
import { HomeComponent } from './components/home/home.component';
import { ModuleWithProviders } from "@angular/core";
import { AuthGuard } from './components/security/auth.guard';
import { UserNewComponent } from './components/user-new/user-new.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { TicketNewComponent } from './components/ticket-new/ticket-new.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { SummaryComponent } from './components/summary/summary.component';
import { DebitoFinanceiroComponent } from './components/relatorio/debito-financeiro/debito-financeiro.component';


export const ROUTES: Routes = [
  { path: 'login' , component: LoginComponent },
  { path: '' , component:  HomeComponent, canActivate: [AuthGuard]},
  { path: 'user-new' , component: UserNewComponent, canActivate: [AuthGuard] },
  { path: 'user-new/:id' , component: UserNewComponent, canActivate: [AuthGuard] },
  { path: 'user-list' , component: UserListComponent, canActivate: [AuthGuard] },
  { path: 'ticket-new' , component: TicketNewComponent, canActivate: [AuthGuard] },
  { path: 'ticket-new/:id' , component: TicketNewComponent, canActivate: [AuthGuard] },
  { path: 'ticket-list' , component: TicketListComponent, canActivate: [AuthGuard] },
  { path: 'ticket-detail/:id' , component: TicketDetailComponent, canActivate: [AuthGuard] },
  { path: 'summary' , component: SummaryComponent, canActivate: [AuthGuard] },
  { path: 'debito-financeiro' , component: DebitoFinanceiroComponent, canActivate: [AuthGuard] }
]

export const routes: ModuleWithProviders = RouterModule.forRoot(ROUTES);