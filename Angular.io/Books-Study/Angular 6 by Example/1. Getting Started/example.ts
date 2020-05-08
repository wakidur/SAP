// output the value of a component property
let property: string = "Hello world";
{{property}}
// adds two values
{{7+8}}
// outputs the result of boolean comparison. ternary operator
{{ property.length >= 0 ? "Positive" : "Nagative"}}

// Call a component's testMethod and outp t the reatue value
{{textMethod()}}