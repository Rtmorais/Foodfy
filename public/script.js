const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for (let card of cards) {
	card.addEventListener('click', function() {
		const recipeIndex = card.getAttribute('id');
		window.location.href = `/recipe/${recipeIndex}`;
	});
}

// Action to show the recipe content //

const ingredientsContent = document.querySelector('.ingredients_content');
const showIng = document.querySelector('.show_ing');

showIng.addEventListener('click', function() {
	if (showIng.innerHTML == 'Mostrar') {
		ingredientsContent.classList.add('active');
		showIng.innerHTML = 'Esconder';
	} else {
		ingredientsContent.classList.remove('active');
		showIng.innerHTML = 'Mostrar';
	}
});

const preparationContent = document.querySelector('.preparation_content');
const showPrep = document.querySelector('.show_prep');

showPrep.addEventListener('click', function() {
	if (showPrep.innerHTML == 'Mostrar') {
		preparationContent.classList.add('active');
		showPrep.innerHTML = 'Esconder';
	} else {
		preparationContent.classList.remove('active');
		showPrep.innerHTML = 'Mostrar';
	}
});

const informationContent = document.querySelector('.information_content');
const showInf = document.querySelector('.show_inf');

showInf.addEventListener('click', function() {
	if (showInf.innerHTML == 'Mostrar') {
		informationContent.classList.add('active');
		showInf.innerHTML = 'Esconder';
	} else {
		informationContent.classList.remove('active');
		showInf.innerHTML = 'Mostrar';
	}
});
