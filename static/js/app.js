let score = 10;

var piatti = [
	{
		nome: 'Popizze',
		foto: 'https://www.pugliainesclusiva.it/puglia/wp-content/uploads/2016/08/popizze-fritte-3.jpg',
		sottotitolo: 'Sei una popizza',
		descrizione: `Le Popizze sono persone estremamente affascinanti e glamour, sempre al passo con le ultime tendenze. Sono sicure di sé e attirano l'attenzione ovunque vadano. Con un atteggiamento spavaldo e una personalità che fa risaltare la loro bellezza, le Popizze sanno come farsi notare e ammirare. Sono abili nel creare una rete di contatti e circondarsi di persone altrettanto affascinanti. Amanti dell'abbondanza e dei lussi, le Popizze non si accontentano di meno. Sono sempre alla ricerca delle ultime novità e non esitano a mettersi in mostra. Sei sicuro di voler entrare nel loro mondo glamour?`,
		valore: '30',
	},
	{
		nome: 'Pasticciotto',
		foto: 'https://wips.plug.it/cips/buonissimo.org/cms/2019/07/guarnire-pasticciotto-leccese.jpg',
		sottotitolo: 'Sei un pasticciotto',
		descrizione: `I Pasticciotti sono persone che si distinguono per la loro creatività e per la loro naturale inclinazione all'arte e all'espressione artistica. Sono dotati di una fervida immaginazione e sanno come trasformare anche la situazione più caotica in un'opera d'arte. Sono abili nel trovare soluzioni innovative e nel mettere in pratica idee originali. I Pasticciotti sono spesso impegnati in progetti artistici che li portano a sperimentare nuove forme di espressione. Anche se possono sembrare un po' disordinati e imprevedibili, sono in realtà delle menti geniali che sanno come portare una ventata di freschezza ovunque vadano. Sei pronto a immergerti nel loro universo creativo?`,
		valore: '50',
	},
	{
		nome: 'Cartellata',
		foto: 'https://i.pinimg.com/736x/b3/03/b8/b303b8385e8dfb77730de6452fbe8a27.jpg',
		sottotitolo: 'Sei una cartellata',
		descrizione: `Le Cartellate sono persone estremamente tradizionali e attaccate alle loro radici. Sono molto legate alla loro famiglia e alla loro comunità, e danno grande importanza alle tradizioni e ai valori trasmessi da generazioni. Le Cartellate sono conosciute per la loro ospitalità e generosità, sono sempre pronte ad accogliere e coccolare chiunque entri nella loro vita. Sono maestri nell'arte della cucina tradizionale e delle ricette tramandate. Sanno come creare piatti deliziosi che riflettono la loro cultura e la loro identità. Le Cartellate amano trascorrere il tempo con le persone a loro care e sono sempre pronte a condividere una buona risata e una prelibatezza culinaria. Sei pronto a immergerti nell'accogliente mondo delle Cartellate?`,
		valore: '70',
	},
];
var questions = [
	{
		question: 'La mattina sei...',
		answers: [
			{
				answer: 'Perennemente in ritardo',
				value: -10,
			},
			{
				answer: 'Perfettamente in orario',
				value: 0,
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
				value: -10,
			},
			{
				answer: 'Acqua, rigorosamente',
				value: 0,
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
				value: -10,
			},
			{
				answer: 'Dolce',
				value: 0,
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
				value: -10,
			},
			{
				answer: 'Amaro',
				value: 0,
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
				value: -10,
			},
			{
				answer: 'Musica leggera',
				value: 0,
			},
			{
				answer: 'Jazz',
				value: 10,
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
	let distanza_1 = Math.abs(parseInt(piatti[0].valore) - score);
	let distanza_2 = Math.abs(parseInt(piatti[1].valore) - score);
	let distanza_3 = Math.abs(parseInt(piatti[2].valore) - score);

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
	document.querySelector('.underTitle').innerText = piatto.sottotitolo;
	document.querySelector('.description').innerText = piatto.descrizione;
	document.querySelector('#imgPlate').src = piatto.foto;
}
