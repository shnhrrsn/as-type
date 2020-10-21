export function boolean(value: any): boolean {
	if (value === true) {
		return true
	}

	if (value === false || value === null || value === undefined) {
		return false
	}

	const type = typeof value

	if (type === 'string') {
		return ['true', 't', '1', 'yes', 'y'].indexOf(value.toLowerCase().trim()) >= 0
	} else if (type === 'number') {
		return value === 1
	}

	return false
}

export function integer(value: any): number {
	if (Number.isInteger(value)) {
		return value
	}

	if (value === false || value === null) {
		return 0
	}

	if (typeof value === 'undefined') {
		return 0
	}

	const num = Number.parseInt(value)

	if (Number.isInteger(num)) {
		return num
	}

	return 0
}

export function float(value: any): number {
	if (Number.isFinite(value)) {
		return value
	}

	if (value === false || value === null) {
		return 0.0
	}

	if (typeof value === 'undefined') {
		return 0.0
	}

	const num = Number.parseFloat(value)

	if (Number.isFinite(num)) {
		return num
	}

	return 0
}
