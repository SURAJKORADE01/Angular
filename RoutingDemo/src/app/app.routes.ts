// routinh sathi chi file

import { Routes } from '@angular/router';
import { BatchdetailsComponent } from './batchdetails/batchdetails.component';
import { BatchlistComponent } from './batchlist/batchlist.component'
import { InvalidComponent } from './invalid/invalid.component'
import { WelcomeComponent } from './welcome/welcome.component'

export const routes: Routes = [
    
    // hya mule InvalidComponent directly display nahi honnar 
    // Like Default route 
    {
        path : '',  
        component : WelcomeComponent
    },

    {   // type kartana naav
        path : 'batchdetails',  
        component : BatchdetailsComponent
    },

    {
        path : 'batchlist',
        component : BatchlistComponent
    },

    // WildcardRoute -> Chukicha routing dila tr hai display kr
    // WildcardRoute should be at the end
    {
        path : "**",    // varcha kahi match nahi zala tr hai display kr
        component : InvalidComponent
    }
];
