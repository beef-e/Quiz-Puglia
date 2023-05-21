let score = 50;

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
				value: -5,
			},
			{
				answer: 'Perfettamente in orario',
				value: 0,
			},
			{
				answer: 'Perennemente in anticipo',
				value: 5,
			},
		],
	},
	{
		question: 'Quando mangi, che bibita preferisci?',
		answers: [
			{
				answer: 'Una birra fresca',
				value: -5,
			},
			{
				answer: 'Acqua, rigorosamente',
				value: 0,
			},
			{
				answer: 'Un bicchiere di vino',
				value: 5,
			},
		],
	},
	{
		question: 'Se fai uno spuntino, cosa preferisci?',
		answers: [
			{
				answer: 'Fritto',
				value: -5,
			},
			{
				answer: 'Dolce',
				value: 0,
			},
			{
				answer: 'Salato',
				value: 5,
			},
		],
	},
	{
		question: 'Sei più un tipo da...',
		answers: [
			{
				answer: 'Caffè',
				value: -5,
			},
			{
				answer: 'Amaro',
				value: 0,
			},
			{
				answer: 'Grappa',
				value: 5,
			},
		],
	},
	{
		question: 'Che tipo di musica ascolti?',
		answers: [
			{
				answer: 'Rock',
				value: -5,
			},
			{
				answer: 'Musica leggera',
				value: 0,
			},
			{
				answer: 'Jazz',
				value: 5,
			},
		],
	},
];

var avanti = document.querySelector('#avanti');

let attuale = 0;
let question = questions[attuale];
showQuestion(question);

function clickClbk(event) {
	console.log('avanti');
	event.preventDefault();
	score = score + parseInt(document.querySelector('input[name="question-1"]:checked').value);
	attuale++;
	question = questions[attuale];
	showQuestion(question);
}

avanti.addEventListener('click', clickClbk);

function showQuestion(question) {
	var answers = question.answers;
	document.querySelector('#text').innerText = question.question;
	for (let i = 0; i < answers.length; i++) {
		const answer = answers[i];
		document.querySelector(`#label-${i + 1}`).innerText = answer.answer;
		//document.querySelector(`label[for="question-${i+1}"]`).setAttribute('value', answer.value);
		document.querySelector(`#answer-${i + 1}`).value = answer.value;
	}
	for (let i = 0; i < document.querySelectorAll(`input[name="question-1"]`).length; i++) {
		document.querySelectorAll(`input[name="question-1"]`)[i].checked = false;
	}
	if (attuale == questions.length - 1) {
		avanti.innerText = 'Vai al risultato';
		avanti.type = 'submit';
		avanti.removeEventListener('click', clickClbk);
	}
}

document.querySelector('form').addEventListener('submit', function (event) {
	console.log('submit');
	event.preventDefault();
	distanza();
});

//una volta che ho risposto alle domande prendo i punteggi dei singoli risultati e calcola la distanza euclidea fra il punteggio e i vari possibili risultati

function distanza() {
	let distanza_1 = piatti[0].valore - score;
	let distanza_2 = piatti[1].valore - score;
	let distanza_3 = piatti[2].valore - score;

	let minimo = Math.min(distanza_1, distanza_2, distanza_3);

	if (minimo === distanza_1) {
		showResult(piatti[0]);
	} else if (minimo === distanza_2) {
		showResult(piatti[1]);
	} else {
		showResult(piatti[2]);
	}
}

function showResult(piatto) {
	document.querySelector('form').style.display = 'none';
	document.querySelector('.nomePlate').innerText = piatto.nome;
	document.querySelector('.description').innerText = piatto.descrizione;
	document.querySelector('#imgPlate').src = piatto.foto;
}
