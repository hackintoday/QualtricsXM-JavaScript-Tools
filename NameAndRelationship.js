Qualtrics.SurveyEngine.addOnload(function() {
    // Create the table structure
    var tableHTML = `
        <style>
            /* Default styles for desktop and mobile */
            .InputText {
                width: 75%; /* Smaller size by default */
                margin-left: 5px; /* Reduce horizontal distance */
                margin-right: 5px; /* Reduce horizontal distance */
            }
            
            /* Styles for relationship fields */ 
            .relationshipField {
                width: 45%; /* Reduce the size for relationship fields */ 
            }

            /* Styles for desktop */
            .relationshipLabel {
                text-align: right; /* Align relationship label to the right */
                padding-right: 115px; /* Move relationship label to the right */
            }
            .nameLabel {
                text-align: left; /* Align name label to the left */
                padding-left: 5px; /* Move name label drastically to the left */
            }
            .isMySpan {
                margin-left: 5px;
                margin-right: 5px;
            }

            /* Styles for mobile */
            @media (max-width: 767px) {
                .InputText {
                    width: 60%; /* Increase the size for mobile */
                }
                .relationshipField { 
                    width: 50%; /* Adjust the size for relationship fields on mobile */ 
                }
                .nameField { 
                    width: 80%; /* Increase the size for name fields on mobile */ 
                    margin-left: 20px; /* Move the name field further to the left */ 
                }
                .relationshipField {
                    margin-right: 10px;
                }
                .nameLabel {
                    text-align: left; /* Align name label to the left */
                    padding-left: 20px; /* Move name label drastically to the left */
                }
                .relationshipLabel {
                    text-align: right; /* Align relationship label to the right */
                    padding-right: 30px; /* Move relationship label to the right */
                }
                .isMySpan {
                    margin-left: 5px;
                    margin-right: 5px;
                }
            }
        </style>
        <table>
            <thead>
                <tr>
                    <th class="nameLabel" style="font-size: 18px;">Name</th>
                    <th class="relationshipLabel" style="font-size: 18px;">Relationship</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="text" id="name1" class="InputText nameField" style="margin-bottom: 10px;"></td>
                    <td><span class="isMySpan">is my</span> <input type="text" id="relationship1" class="InputText relationshipField" style="margin-bottom: 10px;"></td>
                </tr>
                <tr>
                    <td><input type="text" id="name2" class="InputText nameField" style="margin-bottom: 10px;"></td>
                    <td><span class="isMySpan">is my</span> <input type="text" id="relationship2" class="InputText relationshipField" style="margin-bottom: 10px;"></td>
                </tr>
                <tr>
                    <td><input type="text" id="name3" class="InputText nameField" style="margin-bottom: 10px;"></td>
                    <td><span class="isMySpan">is my</span> <input type="text" id="relationship3" class="InputText relationshipField" style="margin-bottom: 10px;"></td>
                </tr>
            </tbody>
        </table>
    `;

    // Append the table to the question container
    jQuery("#" + this.questionId + " .QuestionText").after(tableHTML);

    // Function to check if all inputs are valid
    window.checkInput = function() {
        var name1 = jQuery("#name1").val();
        var relationship1 = jQuery("#relationship1").val().trim(); // Remove leading spaces
        var name2 = jQuery("#name2").val();
        var relationship2 = jQuery("#relationship2").val().trim(); // Remove leading spaces
        var name3 = jQuery("#name3").val();
        var relationship3 = jQuery("#relationship3").val().trim(); // Remove leading spaces

        // Set embedded data
        Qualtrics.SurveyEngine.setEmbeddedData("name1", name1);
        Qualtrics.SurveyEngine.setEmbeddedData("relationship1", relationship1);
        Qualtrics.SurveyEngine.setEmbeddedData("name2", name2);
        Qualtrics.SurveyEngine.setEmbeddedData("relationship2", relationship2);
        Qualtrics.SurveyEngine.setEmbeddedData("name3", name3);
        Qualtrics.SurveyEngine.setEmbeddedData("relationship3", relationship3);
    };

    // Ensure only valid characters are inputted and auto-jump to the next field
    jQuery("#name1, #name2, #name3").on("input", function() {
        this.value = this.value.replace(/[^a-zA-Z\s]/g, ''); // Allow only letters and spaces for name fields
        if (this.value.length === this.maxLength) {
            jQuery(this).nextAll("input[type='text']").first().focus();
        }
        checkInput(); // Call checkInput on every input change
    });

    jQuery("#relationship1, #relationship2, #relationship3").on("input", function() {
        this.value = this.value.replace(/[^a-zA-Z\s0-9]/g, ''); // Allow only letters, spaces, and numbers for relationship fields
        if (this.value.length === this.maxLength) {
            jQuery(this).nextAll("input[type='text']").first().focus();
        }
        checkInput(); // Call checkInput on every input change
    });

    // Populate the text fields with existing embedded data values
    jQuery("#name1").val(Qualtrics.SurveyEngine.getEmbeddedData("name1"));
    jQuery("#relationship1").val(Qualtrics.SurveyEngine.getEmbeddedData("relationship1"));
    jQuery("#name2").val(Qualtrics.SurveyEngine.getEmbeddedData("name2"));
    jQuery("#relationship2").val(Qualtrics.SurveyEngine.getEmbeddedData("relationship2"));
    jQuery("#name3").val(Qualtrics.SurveyEngine.getEmbeddedData("name3"));
    jQuery("#relationship3").val(Qualtrics.SurveyEngine.getEmbeddedData("relationship3"));

    // Add a warning message when the respondent presses next
    Qualtrics.SurveyEngine.addOnPageSubmit(function() {
        var relationship1 = jQuery("#relationship1").val().trim();
        var relationship2 = jQuery("#relationship2").val().trim();
        var relationship3 = jQuery("#relationship3").val().trim();

        if (/\d/.test(relationship1) || /\d/.test(relationship2) || /\d/.test(relationship3)) {

            alert("Your relationship description includes a number. You may return to this page if it is a typo.");
        }
    });
});




Qualtrics.SurveyEngine.addOnReady(function()
{
	/*Place your JavaScript here to run when the page is fully displayed*/

});

Qualtrics.SurveyEngine.addOnUnload(function() {
    // Retrieve embedded data values
    var embeddedValues = [
        Qualtrics.SurveyEngine.getEmbeddedData("name10"),
        Qualtrics.SurveyEngine.getEmbeddedData("name11"),
        Qualtrics.SurveyEngine.getEmbeddedData("name12"),
        Qualtrics.SurveyEngine.getEmbeddedData("name13"),
        Qualtrics.SurveyEngine.getEmbeddedData("name14"),
        Qualtrics.SurveyEngine.getEmbeddedData("name15"),

    ];

    // Convert all values to lowercase for case-insensitive comparison
    var lowerCaseValues = embeddedValues.map(function(value) {
        return value ? value.toLowerCase() : value;
    });

    // Remove duplicate entries
    var uniqueValues = [...new Set(lowerCaseValues)];

    // Clear unique embedded data fields
    for (var i = 1; i <= 8; i++) {
        Qualtrics.SurveyEngine.setEmbeddedData("uniquename" + i, "");
    }

    // Set unique values to new embedded data fields
    uniqueValues.forEach(function(value, index) {
        if (value) {
            // Find the original case-sensitive value
            var originalValue = embeddedValues.find(function(origValue) {
                return origValue && origValue.toLowerCase() === value;
            });
            Qualtrics.SurveyEngine.setEmbeddedData("uniquename" + (index + 1), originalValue);
        }
    });
});
