const data = {

	combinations: [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]],
	field: document.getElementsByClassName("ticTacToe_field"),

}


const ticTacToe = {

	checkForWin: function(state) {

		for (let i=0; i<data.combinations.length; i++) {

			let crosses = 0;
			let circles = 0;

			for (let i2=0; i2<3; i2++) {

				if (state[data.combinations[i][i2]]==="x") {
					crosses++;
				} else if (state[data.combinations[i][i2]]==="o") {
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
	checkForDraw: function(state) {

		let temp = ticTacToe.checkForWin(state);
		if (!temp) {
			for (let i=0; i<state.length; i++) {
				if (state[i]!=="x" && state[i]!=="o") {
					return false;
				} else if (i===state.length-1) {
					return true;
				}
			}
		}

	},
	checkForInvalid: function(state) {

		let crosses = 0;
		let circles = 0;

		for (let i=0; i<state.length; i++) {
			if (state[i]==="x") {
				crosses++;
			} else if (state[i]==="o") {
				circles++;
			}  else if (state[i]!=="-") {
				return true;
			}
			if (i===state.length-1) {
				if (crosses<circles || crosses>circles+1) {
					return true;
				}
			}
		}

		let wins = 0;

		for (let i=0; i<data.combinations.length; i++) {

			let crosses = 0;
			let circles = 0;

			for (let i2=0; i2<3; i2++) {

				if (state[data.combinations[i][i2]]==="x") {
					crosses++;
				} else if (state[data.combinations[i][i2]]==="o") {
					circles++;
				}
				if (i2===2) {
					if (crosses===3 || circles===3) {
						wins++;
					}
					if (i===data.combinations.length-1) {
						if (wins>1) {
							if ((state[0]==="x", state[2]==="x", state[4]==="x", state[6]==="x", state[8]==="x") || (state[1]==="x", state[3]==="x", state[4]==="x", state[5]==="x", state[7]==="x")) {
							} else {
								return true;
							}
						}
					}
				}
			}
		}

		return false;

	},
	checkForActive: function(state) {

		let crosses = 0;
		let circles = 0;

		for (let i=0; i<state.length; i++) {
			if (state[i]==="x") {
				crosses++;
			} else if (state[i]==="o") {
				circles++;
			}
		}
		if (ticTacToe.checkForWin(state)!==false) {
			return {active: false, message: "winner found",};
		} else if (ticTacToe.checkForDraw(state)) {
			return {active: false, message: "draw",};
		} else if (ticTacToe.checkForInvalid(state)) {
			return {active: false, message: "invalid state",};
		} else if (crosses>circles) {
			return {active: true, message: "o",};
		} else if (crosses===circles) {
			return {active: true, message: "x",};
		}

	},
	fieldToState: function() {

		for (let i=0; i<data.field.length; i++) {
			let result = [];

			if (data.field[i].innerHTML==="X") {
				result.push("x");
			} else if (data.field[i].innerHTML==="O") {
				result.push("o");
			}
		}

	},
	stateToField: function(state) {

		for (let i=0; i<state.length; i++) {

			if (state[i]==="x") {
				data.field[i].innerHTML = "X";
				data.field[i].classList.add("ticTacToe_field_red");
				data.field[i].classList.remove("ticTacToe_field_blue")
			} else if (state[i]==="o") {
				data.field[i].innerHTML = "O";
				data.field[i].classList.add("ticTacToe_field_blue");
				data.field[i].classList.remove("ticTacToe_field_red")
			} else if (state[i]==="-") {
				data.field[i].innerHTML = "";
				data.field[i].classList.remove("ticTacToe_field_blue");
				data.field[i].classList.remove("ticTacToe_field_red")
			}

		}

	},

}