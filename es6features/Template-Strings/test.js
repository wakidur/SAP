// Multi-line strings
console.log('string text line1\n' + 'string text line 2');
// "String text line1
// string text line 2 "

console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2 " 

/**
 * Expression interpolation
 */

var a = 5;
var b = 10;
console.log('Fifteen is ' + (a + b) + 'and\nnot ' + (2* a + b) + '.');
// " Fifteen is 15 and 
// not 20."

var c = 65;
var d = 120;

console.log( ` Fifteen is ${a + b} and
 not ${2* a + b}.`);

// "Fifteen is 15 and 
// not 20."

/**
 *  Nesting templates
 */

function isLargeScreen() {
     return false;
}
var item = {
    isCollapsed: true
};



// in ES5
var classes = 'header'
    classes += (isLargeScreen() ? "" : item.isCollapsed ? 'icon-expander' : 'icon-collapser');

// In ES2015 with template literals and without nesting:

const classesNest = `header ${ isLargeScreen() ? '' : (item.isCollapsed  ? 'icon-expander' : 'icon-collapser')}`;

// In ES2015 with nested template literals:
const classess = `header ${ isLargeScreen() ? '' : `icon-${item.isCollapsed  ? 'expander' : 'collapser'}`}`;


// Tagged templates
var person = 'Mike';
var age = 28;

function myTag(strings, personExp, ageExp) {
    var str0 = strings[0]; // "that "
    var str1 = strings[1]; // "is a "

    // There is techically a string after
    // the final expression (in our example)
    // but it is empty(""), so disregard.
    // var str2 = strings[2];

    var ageStr;
    if (ageExp > 99) {
        ageStr = 'centenarian';
    } else {
        ageStr = 'youngster';
    }

    return str0 + personExp + str1 + ageStr;
}

var output = myTag`that ${ person } is a ${abe}`;
console.log(output);
// that Maike is a youngster 


// Tag function don't need to return a string, as shown in the following example.

function template(strings, ...keys) {
    return ( function(...values) {
        var dict = values[values.length -1] || {};
        var result = [strings[0]];
        keys.forEach(function(key, i) {
            var value = Number.isInteger(key) ? values[key] : dict[key];
            result.push(value, strings[i + 1]);
        });
        return result.join('');
    });
}

var t1closure = template`${0}${1}${2}!`;
t1closure('y', 'a')// "yay!";
var t2closure = template`${0} ${'foo'}`;
t2closure('hello', {foo: 'world'});