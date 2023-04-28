const quizForm = document.getElementById('quiz-form');
	const result = document.getElementById('result');
        const correct =document.getElementById('correct');
		quizForm.addEventListener('submit', (event) => {
			event.preventDefault();
			const form = new FormData(quizForm);
			let score = 0;
			let i = 1;
			let TestAnswer = '';
			for (const entry of form) {
				const answer = entry[1];
				if (answer === 'correct'  ) {
					score++;
					TestAnswer += `<p>Question ${i}: Correct</p>`;
				} else {
					TestAnswer += `<p>Question ${i}: Incorrect</p>`;
				}
				i++;
			}
			
			TestAnswer += `<h2>Your score: ${score} out of 20</h2>`;
			result.innerHTML = TestAnswer;
		});
 
   
