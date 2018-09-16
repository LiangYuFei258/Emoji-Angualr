import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { JumbotronComponent } from './body/jumbotron/jumbotron.component';
import { BodyRecommentComponent } from './body/body-recommend/body-recommend.component';
import { CardsComponent } from './body/cards/cards.component';
import { RightTagComponent } from './body/right-tag/right-tag.component';
import { BodyHotComponent } from './body/body-hot/body-hot.component';


const appRoutes: Routes = [
  { path: '', component: BodyRecommentComponent },
  { path: 'hot', component: BodyHotComponent },
  { path: '**', component: BodyRecommentComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    JumbotronComponent,
    BodyRecommentComponent,
    CardsComponent,
    RightTagComponent,
    BodyHotComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
