var piatti = [
	{
		nome: 'Popizze',
		foto: 'https://www.pugliainesclusiva.it/puglia/wp-content/uploads/2016/08/popizze-fritte-3.jpg',
		descrizione: 'Sei una popizza',
		valore: '30',
	},
	{
		nome: 'Sgagliozza',
		foto: 'https://blog.giallozafferano.it/fablesucre/wp-content/uploads/2020/09/Blog_IMG_0390-scaled.jpg',
		descrizione: 'Sei una sgagliozza',
		valore: '50',
	},
	{
		nome: 'Puccia',
		foto: 'https://staticcookist.akamaized.net/wp-content/uploads/sites/21/2022/06/Puccia-salentina-1200x675.jpg',
		descrizione: 'Sei una puccia',
		valore: '70',
	},
];
var questions = [
	{
		question: 'Quale di questi piatti ti piace di più?',
		answers: [
			{
				answer: 'Popizze',
				value: 10,
			},
			{
				answer: 'Sgagliozza',
				value: 10,
			},
			{
				answer: 'Puccia',
				value: 10,
			},
		],
	},
	{
		question: 'Quale dovrebbe essere la prossima domanda?',
		answers: [
			{
				answer: 'Popizze',
				value: 10,
			},
			{
				answer: 'Sgagliozza',
				value: 10,
			},
			{
				answer: 'Puccia',
				value: 10,
			},
		],
	},
	{
		question: 'Quale dovrebbe essere la prossima domanda?',
		answers: [
			{
				answer: 'Popizze',
				value: 10,
			},
			{
				answer: 'Sgagliozza',
				value: 10,
			},
			{
				answer: 'Puccia',
				value: 10,
			},
		],
	},
];
var avanti = document.querySelector('#avanti');

let attuale = 0;
var question = questions[attuale];
showQuestion(question);

avanti.addEventListener('click', function (event) {
	event.preventDefault();
	question = questions[attuale++];
	showQuestion(question);
});

function showQuestion(question) {
	var answers = question.answers;
	document.querySelector('text').innerText = question.question;
	for (let i = 0; i < answers.length; i++) {
		const answer = answers[i];
		document.querySelector(`label[for="question-${i + 1}"]`).innerText = answer.answer;
		//document.querySelector(`label[for="question-${i+1}"]`).setAttribute('value', answer.value);
		document.querySelector(`label[for="question-${i + 1}"]`).value = answer.value;
	}
	document.getElementById('question').innerHTML = question.question;
	document.getElementById('answers').innerHTML = answersHtml;
}
