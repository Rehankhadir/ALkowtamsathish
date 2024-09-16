import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { CanvasProgressComponent } from './canvas-progress/canvas-progress.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CanvasProgressComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
