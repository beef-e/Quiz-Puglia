var piatti = [
	{
		nome: 'Popizze',
		foto: 'https://www.pugliainesclusiva.it/puglia/wp-content/uploads/2016/08/popizze-fritte-3.jpg',
		descrizione: 'Sei una popizza',
		valore: '30',
	},
	{
		nome: 'Pasticciotto',
		foto: 'https://blog.giallozafferano.it/fablesucre/wp-content/uploads/2020/09/Blog_IMG_0390-scaled.jpg',
		descrizione: 'Sei un pasticciotto',
		valore: '50',
	},
	{
		nome: 'Cartellata',
		foto: 'https://staticcookist.akamaized.net/wp-content/uploads/sites/21/2022/06/Puccia-salentina-1200x675.jpg',
		descrizione: 'Sei una cartellata',
		valore: '70',
	},
];
var questions = [
	{
		question: 'La mattina sei...',
		answers: [
			{
				answer: 'Perennemente in ritardo',
				value: 10,
			},
			{
				answer: 'Perfettamente in orario',
				value: 10,
			},
			{
				answer: 'Perennemente in anticipo',
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
				answer: 'Acqua, rigorosamente',
				value: 10,
			},
			{
				answer: 'Un bicchiere di vino',
				value: 10,
			},
		],
	},
	{
		question: 'Se fai uno spuntino, cosa preferisci?',
		answers: [
			{
				answer: 'Fritto',
				value: 10,
			},
			{
				answer: 'Dolce',
				value: 10,
			},
			{
				answer: 'Salato',
				value: 10,
			},
		],
	},
	{
		question: 'Sei più un tipo da...',
		answers: [
			{
				answer: 'Caffè',
				value: 10,
			},
			{
				answer: 'Amaro',
				value: 10,
			},
			{
				answer: 'Grappa',
				value: 10,
			},
		],
	},
	{
		question: 'Che tipo di musica ascolti?',
		answers: [
			{
				answer: 'Rock',
				value: 10,
			},
			{
				answer: 'Musica leggera',
				value: 10,
			},
			{
				answer: 'Jazz',
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
let question = questions[attuale];
showQuestion(question);

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
