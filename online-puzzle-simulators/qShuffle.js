Qualtrics.SurveyEngine.addOnload(function () {
	/*Place your JavaScript here to run when the page loads*/

});

Qualtrics.SurveyEngine.addOnReady(function () {
	/*Place your JavaScript here to run when the page is fully displayed*/

	jQuery("#" + this.questionId).hide();

	var choice = this.getChoiceAnswerValue();
	//console.log("`" + choice + "`");
	var sequence = "";

	//console.log(choice.length);

	for (var s = 0; s < choice.length; s++) {

		if (choice[s] != " ") {

			if (s < choice.length - 1) { //If not at the end of the string, check the next index

				if (choice[s + 1] == "2") {

					sequence += choice[s];
					sequence += choice[s];
					s++;

				}

				else if (choice[s + 1] == "'") {

					sequence += choice[s].toLowerCase();
					s++;

				}

				else {
					sequence += choice[s];
				}

			}

			else { //End of string, append final sequence item
				sequence += choice[s];
			}
		}

	}

	//console.log(sequence);
	Qualtrics.SurveyEngine.setEmbeddedData("shuffleSequence", sequence);
	Qualtrics.SurveyEngine.setEmbeddedData("shuffleSequenceLength", sequence.length);
});

Qualtrics.SurveyEngine.addOnUnload(function () {
	/*Place your JavaScript here to run when the page is unloaded*/

});