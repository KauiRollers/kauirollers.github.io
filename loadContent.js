export function loadQuestions() {
    fetch('questions.json')
        .then(response => response.json())
        .then(questions => {
            const questionsContainer = document.getElementById('questionnaireContainer');
            for (const key in questions) {
                if (questions.hasOwnProperty(key)) {
                    const question = questions[key];
                    const template = createQuestionTemplate(question);
                    questionsContainer.appendChild(template);
                }
            }
        })
    .catch(error => console.log(error));
}

function createQuestionTemplate(question) {  
    const template = document.createElement('div');
    template.classList.add('question');
    template.innerHTML = `
        
        <fieldset id = "${question.number}">
            <legend>${question.questionContent}</legend>
            <label for="a${question.number}">
                <input type="radio" name="${question.number}" value="a" id="a${question.number}">
                <span>${question.a}</span>
            </label><br>
            <label for="b${question.number}">
                <input type="radio" name="${question.number}" value="b" id="b${question.number}">
                <span>${question.b}</span>
                </label><br>
            <label for="c${question.number}">
                <input type="radio" name="${question.number}" value="c" id="c${question.number}">
                <span>${question.c}</span>
            </label><br>
            <label for="d${question.number}">
                <input type="radio" name="${question.number}" value="d" id="d${question.number}">
                <span>${question.d}</span>
            </label><br>
        </fieldset>
    `;

    return template;
}

