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