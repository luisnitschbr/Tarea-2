//Input Example
//_INPUT = "2\n3 9\n17 24\n";
//Expected Output
/*
2
0
*/
//Second Input Example (Remember to comment the first example in order
//and uncomment the next line in order test this case)

_INPUT = "4\n1 8\n2 4\n10 13\n11 20\n";

//Expected Output
/*
2
1
0
1
*/
//----- Start your code here -------

line1 = _INPUT.split("\n");
line2 = line1.join(" ");	
line1 = line2.split(" ");
T = line1[0];
i = 0;
j = 0;
C = 0;
x = 0;

if(1 <= T && T <= 100) {	
	for(x = 1 ; x < line1.length ; x++) {
		A = line1[x];
		x++;
		B = line1[x];
		if(1 <=A && A <= B && B <= 10^9) {
			for(j = A ; j <= B ; j++) {
				C = Math.sqrt(j);
				if(C%1 == 0) {
					i++;
				}
			}
			console.log(i);
		}
		else {
			console.log("Valores no validos. Cambie valores");
		}
		i = 0;
	}
}
else {
	console.log("Número no valido. Reduzca el número de casos");
}