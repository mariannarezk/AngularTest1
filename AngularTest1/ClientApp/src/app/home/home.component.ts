import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../workout.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  public joggingData: Array<any>;
  public currentJogging: any;
  constructor(private workoutService: WorkoutService) {
    workoutService.get().subscribe((data: any) => this.joggingData = data);
    this.currentJogging = this.setInitialValuesForJoggingData();
  }
  ngOnInit() {

  }
  private setInitialValuesForJoggingData() {
    return {
      id: undefined,
      date: '',
      distanceInMeters: 0,
      timeInSeconds: 0
    }
  }
  public createOrUpdateJogging = function (jogging: any) {
    // if jogging is present in joggingData, we can assume this is an update
    // otherwise it is adding a new element
   
      this.workoutService.add(jogging).subscribe(
        joggingRecord => this.joggingData.push(jogging)
      );
    

    this.currentJogging = this.setInitialValuesForJoggingData();
  };
}
