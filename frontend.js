let data = {

	combinations: [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]],

}


let ticTacToe = {

	checkForWin: function(field) {

		for (let i=0; i<data.combinations.length; i++) {

			let crosses = 0;
			let circles = 0;

			for (let i2=0; i2<3; i2++) {

				if (field[data.combinations[i][i2]]==="x") {
					crosses++;
				} else if (field[data.combinations[i][i2]]==="o") {
					circles++;
				}

				if (i2===2) {

					if (crosses===3) {
						return {winner: "x", combination: data.combinations[i],};
					} else if (circles===3) {
						return {winner: "o", combination: data.combinations[i],};
					} else if (i===data.combinations.length-1) {
						return false;
					}

				}

			}

		}

	},

}