import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AdexHistoryComponent } from './components/adex-history/adex-history.component';
import { AppRoutingModule } from './app-routing.module';

import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { CatNinteenComponent } from './components/cat-ninteen/cat-ninteen.component';
import { TopCatTwintyComponent } from './components/top-cat-twinty/top-cat-twinty.component';
import { TopQuaterOneNineComponent } from './components/top-quater-one-nine/top-quater-one-nine.component';
import { TopQuaterOneTwintyComponent } from './components/top-quater-one-twinty/top-quater-one-twinty.component';
import { TopQuaterTComponent } from './components/top-quater-t/top-quater-t.component';
import { TwityOneComponent } from './components/twity-one/twity-one.component';
import { TwintyOneQThreeComponent } from './components/twinty-one-qthree/twinty-one-qthree.component';
import { TwintyOneCtgComponent } from './components/twinty-one-ctg/twinty-one-ctg.component';
import { QOneTowQtreeComponent } from './components/q-one-tow-qtree/q-one-tow-qtree.component';
import { TwintyOneCatThreeComponent } from './components/twinty-one-cat-three/twinty-one-cat-three.component';
import { TopCatThreeComponent } from './components/top-cat-three/top-cat-three.component';
import { StackTwityOneComponent } from './components/stack-twity-one/stack-twity-one.component';
import { CatByformatQComponent } from './components/cat-byformat-q/cat-byformat-q.component';
import {MatCardModule} from '@angular/material/card';
import { CatByEnvComponent } from './components/cat-by-env/cat-by-env.component';
import { CatByEnvstackComponent } from './components/cat-by-envstack/cat-by-envstack.component';
import { CatByEnvQTComponent } from './components/cat-by-env-qt/cat-by-env-qt.component';
import { CatByRegiComponent } from './components/cat-by-regi/cat-by-regi.component';
import { CatByRegistackComponent } from './components/cat-by-registack/cat-by-registack.component';
import { CatByRegiQTComponent } from './components/cat-by-regi-qt/cat-by-regi-qt.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SideNavComponent,
    AdexHistoryComponent,
    CatNinteenComponent,
    TopCatTwintyComponent,
    TopQuaterOneNineComponent,
    TopQuaterOneTwintyComponent,
    TopQuaterTComponent,
    TwityOneComponent,
    TwintyOneQThreeComponent,
    TwintyOneCtgComponent,
    QOneTowQtreeComponent,
    TwintyOneCatThreeComponent,
    TopCatThreeComponent,
    StackTwityOneComponent,
    CatByformatQComponent,
    CatByEnvComponent,
    CatByEnvstackComponent,
    CatByEnvQTComponent,
    CatByRegiComponent,
    CatByRegistackComponent,
    CatByRegiQTComponent,
   
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChartsModule,
    HttpClientModule,
    MatCardModule
    
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
