Qualtrics.SurveyEngine.addOnReady(function()
{
/*Place your JavaScript here to run when the page is fully displayed.
This code snippet has been added by Jay. Please contact jayhk@umich.edu for any troubleshooting*/
	
/*This snippet must be pasted for every question to hide the dropdown menu*/ 

jQuery(".LanguageSelectorContainer").hide();

	
 this.questionclick = function(event,element){
    if (element.type == 'radio')
    {
      var choiceNum = element.id.split('~')[2];
if(choiceNum==1)
{
jQuery("select[id='Q_lang']").val('EN');
}
if(choiceNum==2)
{
jQuery("select[id='Q_lang']").val('ES');
}
   if(choiceNum==3)
{
jQuery("select[id='Q_lang']").val('ZH-S');
}
 if(choiceNum==4)
{
jQuery("select[id='Q_lang']").val('KO');
}
 if(choiceNum==6)
{
jQuery("select[id='Q_lang']").val('VI');
}
jQuery("select[id='Q_lang']").trigger( "change" );
    }
  }
});
