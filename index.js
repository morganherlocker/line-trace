//assumes line is left->right

module.exports = function (start, end) {
	var cells = {};
	var x0 = Math.floor(start[0]);
	var y0 = Math.floor(start[1]);
	var x1 = Math.floor(end[0]);
	var y1 = Math.floor(end[1]);
	var xCorrection = start[0] - x0;
	var yCorrection = start[1] - y0;

	var dx = Math.abs(x1-x0);
	var dy = Math.abs(y1-y0);
	var sx = (x0 < x1) ? 1 : -1;
	var sy = (y0 < y1) ? 1 : -1;
	var err = dx-dy;

	while(true){
		//console.log('corrections: ', xCorrection+', '+yCorrection)
		//console.log(Math.floor(x0+xCorrection), Math.floor(y0+yCorrection))
		//console.log(Math.floor(x1+xCorrection), Math.floor(y1+yCorrection))
		cells[Math.floor(x0+xCorrection)+'|'+Math.floor(y0+yCorrection)] = true;

		if ((Math.floor(x0)==Math.floor(x1)) && (Math.floor(y0)==Math.floor(y1))) break;
		var e2 = 2*err;
		if (e2 > -dy){ err -= dy; x0  += sx; }
		else if (e2 < dx){ err += dx; y0  += sy; }
	}
	//console.log('====')
	return Object.keys(cells).map(function(key){return key.split('|').map(function(v){return parseInt(v)})});
}

