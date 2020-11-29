import { Routes } from '@angular/router';


import { DashboardComponent } from '../../dashboard/dashboard.component';
import { HomepageComponent } from '../../homepage/homepage.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { HrVisaComponent } from '../../hr-visa/hr-visa.component';
import { OnboardingComponent} from '../../onboarding/onboarding.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'homepage',       component: HomepageComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'hr-visa',        component: HrVisaComponent },
    { path: 'onboarding',     component: OnboardingComponent}
];
