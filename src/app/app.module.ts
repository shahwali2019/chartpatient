import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core/';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NgChartjsModule } from 'ng-chartjs';
import { DataTablesModule } from 'angular-datatables';
import { FilterPipeModule } from 'ngx-filter-pipe'; 
import { AvatarModule } from 'ngx-avatar';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DataTablesModule,
    NgChartjsModule,
    AppRoutingModule,
    HttpClientModule,
    FilterPipeModule,
    HttpModule,
    AvatarModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
