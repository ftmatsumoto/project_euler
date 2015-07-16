fib.cache = [0, 1, 1];

function fib(n, undefined){
	if(fib.cache[n] === undefined)  
		fib.cache[n] = fib(n-1) + fib(n-2);
	return fib.cache[n];
}

i = 0
s = 0

function problem2() {
	while (fib(i) < 4000000) {
		if (fib(i) % 2 === 0) {
			s = s + fib(i);
		}
		i++;
	}
	return s;
}