var test = require('tape');
var trace = require('./');

test('line-trace', function(t){
	var start = [2.2, 3.3];
	var end = [6.7,10.1];
	var cells = trace(start, end);
	t.equal(typeof cells[0][0], 'number');
	t.equal(cells.length, 12);
	t.equal(cells[0][0], 2);
	t.equal(cells[0][1], 3);
	t.end();
});

test('line-trace -- same cells, different fractions', function(t){
	var cells1 = trace([0.001, 1.999], [3.001, 4.999]);
	var cells2 = trace([0.999, 1.001], [3.001, 4.999]);
	t.deepEqual(cells1, cells2);
	t.end();
});


/*
-----------------        -----------------
|       |x      |        |#######|#######|
|       |       |        |#######|#######|
|       |       |        |#######|#######|
-----------------   =>   -----------------
|x      |       |        |#######|       |
|       |       |        |#######|       |
|       |       |        |#######|       |
-----------------        -----------------
*/

test('line-trace -- edge cell top', function(t){
	var cells = trace([0.1, 0.9], [1.1, 1.9]);
	t.deepEqual(cells, [[0,0], [0,1], [1,1]]);
	console.log(cells)
	t.end();
});

/*
-----------------        -----------------
|       |       |        |       |#######|
|       |       |        |       |#######|
|       |      x|        |       |#######|
-----------------   =>   -----------------
|       |       |        |#######|#######|
|       |       |        |#######|#######|
|      x|       |        |#######|#######|
-----------------        -----------------
*/

test('line-trace -- edge cell bottom', function(t){
	var cells = trace([0.9, 0.1], [1.9, 1.1]);
	t.deepEqual(cells, [[0,0], [1,0], [1,1]]);
	console.log(cells)
	t.end();
});

/*
-----------------        -----------------
|       |       |        |#######|#######|
|       |   x   |        |#######|#######|
|       |       |        |#######|#######|
-----------------   =>   -----------------
|       |       |        |#######|#######|
|   x   |       |        |#######|#######|
|       |       |        |#######|#######|
-----------------        -----------------
*/

test('line-trace -- across a diagnal', function(t){
	var cells = trace([0.5, 0.5], [1.5, 1.5]);
	t.deepEqual(cells, [[0,0], [0,1], [1,0], [1,1]]);
	console.log(cells)
	t.end();
});