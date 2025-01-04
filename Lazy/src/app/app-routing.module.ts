import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 2 lazy routes aahet -> admin, staff

// Whenever user click on admin route -> Load the children of admin module -> module file sobat routing file pn aahe manun tithe admin.module lihila
// Whenever user click on admin route -> Load the children of admin module -> admin madhe 2 component aahet -> tyatla konta load karaycha hyachi info admin.module.ts madhe aahe

// hya file madhe 2 routes aahet -> admin and staff i.e hai module aahet
// admin navachya route vr click kela tr load kr -> admin module
// staff navachya route vr click kela tr load kr -> staff module

// admin button vr click kelyavr toh tyatle sagle component aanen
// tyatla konta display karaycha hai admin.module.ts file madhe sang


// jar import kela admin/admin.module la tr control janar Admin.module la janar
// m -> parameter
// m.AdminModule -> logic
 
// Ithe aapn sangto maze 2 child aahet -> admin,staff je ki module aahet i.e child module

// app-routing.module.ts -> app module kadun admin or staff kade kasa jaicha hai ithun sangto
// But admin module madhun kuthe jaicha hai admin-routing.module.ts file sangte

// 1-> It is a global routing file -> child module la kasa jaicha hai sangte
// 2-> admin la click kela tr ja admin.module.ts madhe hai aapn loadchildren madhe karun thevli
// 3-> aata control jato admin.module.ts
// 4-> mg parat control la tyachya local routing file kade jato -> admin-routing.module.ts
// 5-> titun konta component display karaycha hai path varun tharel

const routes :Routes = [
  {path : 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  {path: 'staff', loadChildren: () => import('./staff/staff.module').then(m => m.StaffModule) },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }