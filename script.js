const categoryA = document.querySelector('.category-a');
const categoryB = document.querySelector('.category-b');
const categoryC = document.querySelector('.category-c');
const categoryD = document.querySelector('.category-d');

fetch('data.json')
	.then(response => response.json())
	.then(data => {
		categoryA.querySelector('h3').innerText = data[0].category;
		categoryB.querySelector('h3').innerText = data[1].category;
		categoryC.querySelector('h3').innerText = data[2].category;
		categoryD.querySelector('h3').innerText = data[3].category;

		categoryA.querySelector('p').innerText = data[0].score;
		categoryB.querySelector('p').innerText = data[1].score;
		categoryC.querySelector('p').innerText = data[2].score;
		categoryD.querySelector('p').innerText = data[3].score;
	})
	.catch(error => console.error(error));
