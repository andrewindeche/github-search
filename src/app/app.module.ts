import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitService } from './git.service';
import { ProfileComponent } from './profile/profile.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DatePipe } from './date.pipe';
import { CardhoverDirective } from './cardhover.directive';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LandingpageComponent,
    DatePipe,
    CardhoverDirective,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [GitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
