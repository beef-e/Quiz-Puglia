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
				value: 100,
			},
			{
				answer: 'Sgagliozza',
				value: 50,
			},
			{
				answer: 'Puccia',
				value: 30,
			},
		],
	},
	{
		question: 'La mattina sei...',
		answers: [
			{
				answer: 'Perennemente in ritardo',
				value: 10,
			},
			{
				answer: 'Perennemente in anticipo',
				value: 10,
			},
			{
				answer: 'Perfettamente in orario',
				value: 10,
			},
		],
	},
	{
		question: 'Quando mangi, che bibita preferisci?',
		answers: [
			{
				answer: 'Una birra fresca',
				value: 10,
			},
			{
				answer: 'Un bicchiere di vino',
				value: 10,
			},
			{
				answer: 'Acqua, rigorosamente',
				value: 10,
			},
		],
	},
];

var avanti = document.querySelector('#avanti');

avanti.addEventListener('click', function (event) {
	event.preventDefault();
	question = questions[attuale++];
	showQuestion(question);
});

let attuale = 0;
var question = questions[attuale];
showQuestion(question);

/*avanti.addEventListener('click', function (event) {
	event.preventDefault();
	question = questions[attuale++];
	showQuestion(question);
});*/

function showQuestion(question) {
	var answers = question.answers;
	document.querySelector('#text').innerText = question.question;
	for (let i = 0; i < answers.length; i++) {
		const answer = answers[i];
		document.querySelector(`#label-${i + 1}`).innerText = answer.answer;
		//document.querySelector(`label[for="question-${i+1}"]`).setAttribute('value', answer.value);
		document.querySelector(`#label-${i + 1}`).value = answer.value;
	}
	if (attuale == questions.length - 1) {
		avanti.innerText = 'Vai al risultato';
		avanti.type = 'submit';
	}
}
