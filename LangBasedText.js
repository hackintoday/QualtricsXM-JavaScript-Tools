Qualtrics.SurveyEngine.addOnload(function()
{
	/*Place your JavaScript here to run when the page loads*/
	var inputs = $(this.getQuestionContainer()).select('input[type="text"]');

	if( jQuery("select[id='Q_lang']").val() =="EN") //Check which language is selected
 {  
	for (var i = 0; i < inputs.length; i++) {
	var input = inputs[i];
	$(input).insert({before: ' '});
	$(input).insert({after: ' years old'});
	}
 }
	if( jQuery("select[id='Q_lang']").val() =="ES") //Check which language is selected
 {  
	for (var i = 0; i < inputs.length; i++) {
	var input = inputs[i];
	$(input).insert({before: ' '});
	$(input).insert({after: ' años'});
	}
 }
	if( jQuery("select[id='Q_lang']").val() =="ZH-S") //Check which language is selected
 {  
	for (var i = 0; i < inputs.length; i++) {
	var input = inputs[i];
	$(input).insert({before: ' '});
	$(input).insert({after: ' 岁'});
	}
 }
	if( jQuery("select[id='Q_lang']").val() =="KO") //Check which language is selected
 {  
	for (var i = 0; i < inputs.length; i++) {
	var input = inputs[i];
	$(input).insert({before: '만 '});
	$(input).insert({after: ' 세'});
	}
 }
		if( jQuery("select[id='Q_lang']").val() =="VI") //Check which language is selected
 {  
	for (var i = 0; i < inputs.length; i++) {
	var input = inputs[i];
	$(input).insert({before: ' '});
	$(input).insert({after: ' tuổi'});
	}
 }
});
