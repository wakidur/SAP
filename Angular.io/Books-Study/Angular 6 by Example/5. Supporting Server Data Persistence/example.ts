class WorkoutService {
    workout: WorkoutPlan; 
    collectionsUrl = "https://api.mongolab.com/api/1/ databases/<dbname>/collections"; 
    apiKey = <key> 
    params = '?apiKey=' + this._apiKey; 

    constructor(public http: HttpClient) {}

    static handleError(error: Response) {
     console.error(error);
     return Observable.throw(error || 'Server error');
     
       
    }

    getExercises() {
        return this.http.get<ExercisePlan>(this.collectionsUrl + '/exercises' + this.params)
            .pipe(catchError(WorkoutService.handleError));
    }
    

    getWorkouts() {
        return this.http.get<WorkoutPlan[]>(this.collectionsUrl + '/workouts' + this.params)
            .pipe(catchError(WorkoutService.handleError));
    }
    
}

// exercises.component.ts 
ngOnInit() {
    this.workoutService.getExercises()
    .subscribe(
        exercises => this.exerciseList = exercises,
        (err: any) => console.error
    );
