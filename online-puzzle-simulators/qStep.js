Qualtrics.SurveyEngine.addOnload(function () {
	/*Place your JavaScript here to run when the page loads*/

});

Qualtrics.SurveyEngine.addOnReady(function () {
	/*Place your JavaScript here to run when the page is fully displayed*/

	var step = this.getChoiceAnswerValue();

	Qualtrics.SurveyEngine.setEmbeddedData('stepToSolve', step);

	jQuery("#" + this.questionId).hide();

});

Qualtrics.SurveyEngine.addOnUnload(function () {
	/*Place your JavaScript here to run when the page is unloaded*/

});