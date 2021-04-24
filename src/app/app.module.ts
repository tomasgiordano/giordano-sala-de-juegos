import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import { MainComponent } from './components/main/main.component';
import { RegistroComponent } from './components/registro/registro.component';
import {FormGroup, FormsModule} from "@angular/forms";
import { FirebaseService } from './services/firebase.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase } from '@angular/fire/database';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatModuleModule } from './chat-module/chat-module.module';
import { PiePapTijComponent } from './juegos/pie-pap-tij/pie-pap-tij.component';
import { StartPPTComponent } from './juegos/pie-pap-tij/start-ppt/start-ppt.component';
import { ManosComponent } from './juegos/pie-pap-tij/manos/manos.component';
import { TatetiComponent } from './juegos/tateti/tateti.component';
import { CuadradoTatetiComponent } from './juegos/tateti/cuadrado-tateti/cuadrado-tateti.component';
import { StartTatetiComponent } from './juegos/tateti/start-tateti/start-tateti.component';
import { MemotestComponent } from './juegos/memotest/memotest.component';
import { CuadradoMemotestComponent } from './juegos/memotest/cuadrado-memotest/cuadrado-memotest.component';
import { StartMemotestComponent } from './juegos/memotest/start-memotest/start-memotest.component';
import { ScoreService } from './services/score.service';
import { LoginService } from './services/loginService/login.service';
import { CanvasTetrisComponent } from './juegos/tetris/canvas-tetris/canvas-tetris.component';
import { TetrisComponent } from './juegos/tetris/tetris.component';
import { ScoresComponent } from './juegos/scores/scores.component';
import { ListComponent } from './juegos/scores/list/list.component';
import {ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    QuienSoyComponent,
    HomeComponent,
    ErrorComponent,
    MainComponent,
    RegistroComponent,
    PiePapTijComponent,
    StartPPTComponent,
    ManosComponent,
    TatetiComponent,
    CuadradoTatetiComponent,
    StartTatetiComponent,
    MemotestComponent,
    CuadradoMemotestComponent,
    StartMemotestComponent,
    CanvasTetrisComponent,
    TetrisComponent,
    ScoresComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,    
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatPaginatorModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    ChatModuleModule,
    HttpClientModule,
    MatTableModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBk22tmWg4lhT4R9ZrA9a6qiJ1Cuy_cBzI",
      authDomain: "flatz-973e4.firebaseapp.com",
      databaseURL: "https://flatz-973e4.firebaseio.com",
      projectId: "flatz-973e4",
      storageBucket: "flatz-973e4.appspot.com",
      messagingSenderId: "153201490798",
      appId: "1:153201490798:web:1b567292190cfb627d5f7f",
      measurementId: "G-JM6N70YSQZ"
    })
  ],
  providers: [FirebaseService,AngularFireDatabase, DatePipe,ScoreService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
