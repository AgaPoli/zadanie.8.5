function getTriangleArea(a, h) {
	if (a > 0 && h > 0) {
		console.log("prawidłowe dane");
	} else {
		console.log("nieprawidłowe dane");
	}
	return (a * h) / 2;
}
console.log(getTriangleArea(10, 6));
var triangle1Area = getTraingleArea(10, 15),
	var traingle2Area = getTraingleArea(5, 7),
		var traingle3Area = getTraingleArea(2, 4);