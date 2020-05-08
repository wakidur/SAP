// Declaring constructor parameters with public or private is a shorthand ofr createing and initalizing class members at one go. The ? suffix after nameSound, procedure, and videos implies that these are optional parameters. 

export class Exercise {
    constructor(
        public name: string,
        public title: string,
        public description: string,
        public image: string,
        public nameSound? : string,
        public procedure? : string,
        public videos? : Array<string>
    ) {
        
    }
}

export class WorkoutPlan {
    constructor(
        public name: string,
        public title: string,
        public restBetweenExercise: number,
        public exercises: Exercise[],
        public description?: string
    ) {}
    totalWorkoutDuration(): number {  } 
}

// ExercisePlan
export class ExercisePlan {
    constructor(
        public exercise: Exercise, 
        public duration: number
    ) {
        
    }
}