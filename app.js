var x = 5;
for (var i = 0; i < x; i++) {
    for (var j = x - 1; j > i; j--) {
        document.write("&nbsp&nbsp");
    }
    for (var k = 0; k <= (i * 2); k++) {
        document.write(".");
    }
    document.write("<br>");
}
