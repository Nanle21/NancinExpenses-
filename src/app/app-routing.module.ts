import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { ViewExpensesComponent } from './view-expenses/view-expenses.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/starter', pathMatch: 'full' },
      {
        path: 'starter',
        loadChildren: './starter/starter.module#StarterModule'
      },
      {
        path: 'addExpense',
        component: AddExpenseComponent,
        data: {
          title: 'Add Expense',
        }
      },
      {
        path: 'viewExpense',
        component: ViewExpensesComponent,
        data: {
          title: 'View Expense',
          
        }
      },
      {
        path: 'Login',
        component: LoginComponent,
        data: {
          title: 'Login',
          
        }
      },
      {
        path: 'Register',
        component: RegisterComponent,
        data: {
          title: 'Register',
          
        }
      },
      {
        path: 'component',
        loadChildren: './component/component.module#ComponentsModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/starter'
  }
];
