document.addEventListener("DOMContentLoaded", () => {
	
	// Находим все элементы, которые должны плавно появляться
	const elementsToAnimate = document.querySelectorAll('.fade-in');

	// Настраиваем отслеживание видимости элементов на экране
	const observer = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			// Как только элемент появляется на экране
			if (entry.isIntersecting) {
				entry.target.classList.add('visible');
				// Отключаем слежку за ним, чтобы анимация проигралась один раз
				observer.unobserve(entry.target);
			}
		});
	}, {
		threshold: 0.15 // Анимация срабатывает, когда видно 15% элемента
	});

	// Запускаем отслеживание
	elementsToAnimate.forEach(element => {
		observer.observe(element);
	});

});