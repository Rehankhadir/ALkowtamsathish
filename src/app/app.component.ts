import { Component, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements AfterViewInit {
  currentProgress: number = 0;
  isButtonHidden: boolean = false; // Flag to control button visibility
  isMessageVisible: boolean = false; // Flag to control custom message visibility
  isOffcanvasVisible: boolean = false; // Controls visibility of the offcanvas
  isShowButtonVisible: boolean = false; // Controls visibility of the Show button
  isHideButtonVisible: boolean = false; // Controls visibility of the Hide button

  ngAfterViewInit(): void {
    // No need to initialize Offcanvas here
  }

  startProgress() {
    this.currentProgress = 0; // Reset progress
    this.isButtonHidden = true; // Hide the button when offcanvas starts
    this.isOffcanvasVisible = true; // Show the offcanvas when progress starts
    this.isShowButtonVisible = false; // Hide the Show button
    this.isHideButtonVisible = true; // Show the Hide button

    const interval = setInterval(() => {
      if (this.currentProgress < 100) {
        this.currentProgress += 1; // Increment progress
      } else {
        clearInterval(interval); // Stop interval when reaching 100%
        this.hideOffcanvas(); // Hide the offcanvas
        this.showMessage(); // Show custom message
        this.isHideButtonVisible = true; // Ensure Hide button is visible
      }
    }, 30); // Adjust the interval time as needed for desired speed
  }

  hideOffcanvas() {
    // Access the offcanvas element and hide it using Bootstrap's global methods
    const offcanvasElement = document.getElementById('offcanvasBottom');
    if (offcanvasElement) {
      const offcanvas = (window as any).bootstrap.Offcanvas.getInstance(offcanvasElement);
      if (offcanvas) {
        offcanvas.hide(); // Hide the offcanvas
      }
    }
    this.isOffcanvasVisible = false; // Hide the offcanvas
    this.isShowButtonVisible = true; // Show the Show button
    this.isHideButtonVisible = false; // Hide the Hide button

  }
  showMessage() {
    this.isMessageVisible = true; // Show the custom message
    // Hide the message after 3 seconds
    setTimeout(() => {
      this.isMessageVisible = false;
    }, 3000);
       this.isOffcanvasVisible = true; // Show the offcanvas
    this.isShowButtonVisible = false; // Hide the Show button
    this.isHideButtonVisible = true; // Ensure Hide button is visible
  }
}
