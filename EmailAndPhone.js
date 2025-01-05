Qualtrics.SurveyEngine.addOnload(function() {
  // Function to check if all inputs are valid
  window.checkInput = function() {
    var emailPart1 = jQuery("#emailPart1").val();
    var emailPart2 = jQuery("#emailPart2").val();
    var areaCode1 = jQuery("#areaCode1").val();
    var prefix1 = jQuery("#prefix1").val();
    var lineNumber1 = jQuery("#lineNumber1").val();
    var areaCode2 = jQuery("#areaCode2").val();
    var prefix2 = jQuery("#prefix2").val();
    var lineNumber2 = jQuery("#lineNumber2").val();

    var isValidEmail = /^[a-zA-Z]+$/.test(emailPart1) && /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailPart2);
    var isValidPhone1 = /^[0-9]{3}$/.test(areaCode1) && /^[0-9]{3}$/.test(prefix1) && /^[0-9]{4}$/.test(lineNumber1);
    var isValidPhone2 = /^[0-9]{3}$/.test(areaCode2) && /^[0-9]{3}$/.test(prefix2) && /^[0-9]{4}$/.test(lineNumber2);

 // Set embedded data
    Qualtrics.SurveyEngine.setEmbeddedData("emailPart1", emailPart1);
    Qualtrics.SurveyEngine.setEmbeddedData("emailPart2", emailPart2);
    Qualtrics.SurveyEngine.setEmbeddedData("areaCode1", areaCode1);
    Qualtrics.SurveyEngine.setEmbeddedData("prefix1", prefix1);
    Qualtrics.SurveyEngine.setEmbeddedData("lineNumber1", lineNumber1);
    Qualtrics.SurveyEngine.setEmbeddedData("areaCode2", areaCode2);
    Qualtrics.SurveyEngine.setEmbeddedData("prefix2", prefix2);
    Qualtrics.SurveyEngine.setEmbeddedData("lineNumber2", lineNumber2);  };

  // Ensure only valid characters are inputted and auto-jump to the next field
  jQuery("input[type='text']").on("input", function() {
    if (this.id.startsWith("emailPart")) {
      this.value = this.value.replace(/[^a-zA-Z0-9.-]/g, ''); // Allow letters, numbers, dots, and hyphens
    } else {
      this.value = this.value.replace(/[^0-9]/g, ''); // Allow only numbers for phone fields
    }
    if (this.value.length === this.maxLength) {
      jQuery(this).nextAll("input[type='text']").first().focus();
    }
    checkInput(); // Call checkInput on every input change
  });
});
