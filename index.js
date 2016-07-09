function boolean(value) {
	if(value === true) {
		return true;
	}

	if(value === false || value === null) {
		return false;
	}

	var type = typeof value;

	if(type === 'string') {
		return [ 'true', 't', '1', 'yes', 'y' ].indexOf(value.toLowerCase().trim()) >= 0;
	} else if(type === 'number') {
		return value === 1;
	}

	return false;
}

function integer(value) {
	if(Number.isInteger(value)) {
		return value;
	}

	if(value === false || value === null) {
		return 0
	}

	var type = typeof value;

	if(type === 'undefined') {
		return 0
	}

	var num = parseInt(value);

	if(Number.isInteger(num)) {
		return num;
	} else {
		return 0;
	}
}

function float(value) {
	if(Number.isFinite(value)) {
		return value;
	}

	if(value === false || value === null) {
		return 0.0;
	}

	var type = typeof value;

	if(type === 'undefined') {
		return 0.0;
	}

	var num = Number.parseFloat(value);

	if(Number.isFinite(num)) {
		return num;
	} else {
		return 0;
	}
}

module.exports = {
	'boolean': boolean,
	'integer': integer,
	'double': float,
	'float': float
}
