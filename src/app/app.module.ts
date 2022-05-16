import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { LogoComponent } from './logo/logo.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavLinksComponent } from './nav-links/nav-links.component';
import { UserAvatarComponent } from './user-avatar/user-avatar.component';
import { DrinkButtonComponent } from './drink-button/drink-button.component';
import { MoreInfoButtonComponent } from './more-info-button/more-info-button.component';
import { HeroContentComponent } from './hero-content/hero-content.component';
import { HeroContentDescriptionComponent } from './hero-content-description/hero-content-description.component';
import { DrinkAgainComponent } from './drink-again/drink-again.component';
import { KeepDrinkingComponent } from './keep-drinking/keep-drinking.component';
import { NewBadgeComponent } from './new-badge/new-badge.component';
import { WineListingComponent } from './wine-listing/wine-listing.component';
import { WineAmountConsumedComponent } from './wine-amount-consumed/wine-amount-consumed.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    NavBarComponent,
    NavLinksComponent,
    UserAvatarComponent,
    DrinkButtonComponent,
    MoreInfoButtonComponent,
    HeroContentComponent,
    HeroContentDescriptionComponent,
    DrinkAgainComponent,
    KeepDrinkingComponent,
    NewBadgeComponent,
    WineListingComponent,
    WineAmountConsumedComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
