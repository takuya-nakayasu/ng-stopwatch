import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { IAppState, INITIAL_STATE } from '../state/store';
import { rootReducer } from '../state/reducer';
import { TimerActions } from '../state/action';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
  ],
  providers: [
    TimerActions,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer,
      INITIAL_STATE);
  }
}
