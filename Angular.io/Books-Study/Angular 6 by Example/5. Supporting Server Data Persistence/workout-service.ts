
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators;

@Injectable()
export class ServiceNameService {
    workout: WorkoutPlan; 
    collectionsUrl = "https://api.mongolab.com/api/1/ databases/<dbname>/collections"; 
    apiKey = <key> 
    params = '?apiKey=' + this._apiKey; 

    constructor(private httpClient: HttpClient) { }

    getWorkouts(): Observable<WorkoutPlan[]> {
        return this.httpClient.get(this.collectionsUrl + '/workouts' + this.params).pipe(map((workouts: Array<any>) => {
                const result: Array<WorkoutPlan> = [];
                if (workouts) {
                    workouts.forEach((workout) => {
                        result.push(
                            new WorkoutPlan(workout.name, workout.title, workout.restBetweenExercise, workout.exercises,
                                workout.description)
                        )
                    });
                }
                return result;
            }), catchError(this.handleError<WorkoutPlan[]>('getWorkouts', []))
        );
    }

}
