import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { UsersListComponent } from './users-list/users-list.component';

import { PagesComponent } from './pages/pages.component';
import { PagesService } from './pages.service';
import { WorkoutService } from './workout.service';
import { MenuComponent } from './menu/menu.component';
import { MenusService } from './menus.service';
import { AddOrUpdateMenuComponent } from './add-or-update-menu/add-or-update-menu.component';
import { GridJoggingComponent } from './grid-jogging/grid-jogging.component';
import { AddOrUpdateJoggingComponent } from './add-or-update-jogging/add-or-update-jogging.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditmodalComponent } from './editmodal/editmodal.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryComponent } from './category/category.component';
import { EditcategoryComponent } from './editcategory/editcategory.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    UsersListComponent,
    PagesComponent,
    MenuComponent,
    AddOrUpdateMenuComponent,
    GridJoggingComponent,
    AddOrUpdateJoggingComponent,
    EditmodalComponent,
    ProductListComponent,
    CategoryComponent,
    EditcategoryComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'users-list', component: UsersListComponent },
      { path: 'pages', component: PagesComponent },
      { path: 'menus', component: MenuComponent },
      { path: 'categories/:menuid', component: CategoryComponent }
    ]),
    BrowserAnimationsModule
  ],
  providers: [PagesService, MenusService, WorkoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
