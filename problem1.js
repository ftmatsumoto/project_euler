function problem1(n) {
	s = 0
	for (i = 0; i <= n; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			s = s + i
		}
	}
	return s
}