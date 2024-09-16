import { Component,Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-canvas-progress',
  templateUrl: './canvas-progress.component.html',
  styleUrls: ['./canvas-progress.component.css']
})
export class CanvasProgressComponent implements OnInit{
  @Input() progress: number = 0; // Default to 0% progress
  

  
  ngOnInit(): void {
   
  }

}
