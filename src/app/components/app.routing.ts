import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { CheckinComponent } from './checkIn.component';
import { CheckoutComponent } from './checkout.component';

const appRoutes : Routes = [
	{
		path: '',
		component: LoginComponent
	},
	{
		path: 'checkin',
		component: CheckinComponent
	},

    {
        path: 'checkout',
        component: CheckoutComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes); 