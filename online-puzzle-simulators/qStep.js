Qualtrics.SurveyEngine.addOnload(function () {
	/*Place your JavaScript here to run when the page loads*/

});

Qualtrics.SurveyEngine.addOnReady(function () {
	/*Place your JavaScript here to run when the page is fully displayed*/

	var step = this.getChoiceAnswerValue();


	//Current attempt to get the necessary data to export
	Qualtrics.SurveyEngine.addEmbeddedData('Step' + step, step);  //Absolute for records
	Qualtrics.SurveyEngine.addEmbeddedData('CurrentStep', step); //For step tracking within survey (marks last or previous step encountered)
	Qualtrics.SurveyEngine.addEmbeddedData('Step' + step + '_MoveCounter', '0');
	Qualtrics.SurveyEngine.addEmbeddedData('Step' + step + '_ShuffleSequence', '');
	Qualtrics.SurveyEngine.addEmbeddedData('Step' + step + '_ShuffleSequenceLength', '0');
	Qualtrics.SurveyEngine.addEmbeddedData('Step' + step + '_IsSolved', 'No');

	jQuery("#" + this.questionId).hide();

});

Qualtrics.SurveyEngine.addOnUnload(function () {
	/*Place your JavaScript here to run when the page is unloaded*/

});