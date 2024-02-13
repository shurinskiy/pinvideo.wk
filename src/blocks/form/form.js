import axios from 'axios';

(() => {
	const form = document.querySelector('form.form');
	const infoblock = form.querySelector('.form__alerts');
	
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		infoblock.className = 'form__alerts';
		infoblock.innerHTML = '<img src="images/loading.svg"/>';

		axios({
			method: 'post',
			url: 'mailto.php',
			data: new FormData(e.target),
		}).then(({ data }) => {
			infoblock.innerHTML = data.text;

			if (data.status === 'success') {
				infoblock.classList.add('form__alerts_success');
				e.target.reset(); 
			} else {
				infoblock.classList.add('form__alerts_error');
			}
			
		}).catch(({ data }) => {
			infoblock.innerHTML = data.text;
			infoblock.classList.add('form__alerts_error');
		});
	});

})();
