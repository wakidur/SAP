/**
 * HackerLand University has the following grading policy:
 * Every student receives a grade  in the inclusive range from 0 to 100.
 * Any grade less than 40  is a failing grade.
 *  
 */


/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    // Write your code here

    let result = [];
    grades.forEach(integer => {
        // 
        if ((integer % 5) >= 3 && integer >= 38) {
            result.push(integer + (5 - (integer % 5)));

        } else {
            result.push(integer);
        }
    });
    // return array 
    return result

}