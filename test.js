var test = require('tape');
var trace = require('./');

test('line-trace', function(t){
	var start = [2.2, 3.3];
	var end = [6.7,10.1];

	var cells = trace(start, end);
	
	t.equal(typeof cells[0][0], 'number');
	t.equal(cells.length, 11);
	t.equal(cells[0][0], 2);
	t.equal(cells[0][1], 3);
});