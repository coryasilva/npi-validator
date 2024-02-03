const {ceil, floor} = Math;
const toInt = s => Number.parseInt(s, 10);

const sumDigits = int => {
	let sum = 0;
	while (int) {
		sum += int % 10;
		int = floor(int / 10);
	}

	return sum;
};

const doubleAlternate = (value, index) => {
	let pos = index ?? value.length - 1;
	let sum = 0;
	let alt = true;
	for (; pos >= 0; pos--) {
		const cur = toInt(value.charAt(pos));
		sum += alt ? sumDigits(cur * 2) : cur;
		alt = !alt;
	}

	return sum;
};

export function npiValid(id, prefix = '80840') {
	const prefixRegex = /^80\d{3}$/;
	const npiRegex = /^\d{10}$/;
	const usPrefixSum = 24; // Precalculated value for 80840 (United States)
	const npi = id?.toString() ?? '';
	const pre = prefix?.toString() ?? '';

	if (!npiRegex.test(npi) || !prefixRegex.test(pre)) {
		return false;
	}

	const check = toInt(npi.charAt(9));
	const npiSum = doubleAlternate(npi, 8);
	const preSum = pre === '80840' ? usPrefixSum : doubleAlternate(pre, 3);
	const total = npiSum + preSum;
	const totalCeil = ceil(total / 10) * 10;

	return totalCeil - total === check;
}

export default npiValid;
