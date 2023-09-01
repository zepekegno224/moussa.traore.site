$(document).ready(() => {
	// Button active class
	$('.control').each((i, el) => {
		$(el).click(function (e) {
			$('.active').removeClass('active');
			$(this).addClass('active');
			var section = $(this).attr('data-id');
			$('.section .actvie').removeClass('active');
			$(`#${section}`).addClass('active');
			$(('#circleMenu')).removeClass('show')
		});
	})

	// Theme button
	$('.theme-btn').click(function (e) {
		$('body').toggleClass('light-mode')
	})

	// Text animation
	textAnimLoad()
	var textAnimInterval = setInterval(textAnimLoad, 16000)
	window.onclose = () => {
		clearInterval(textAnimInterval)
	}

	$('#button-social').click(function (e) {
		$(('#circleMenu')).toggleClass('show')
	});

	$('#form-contact').on('submit', function (event) {
		event.preventDefault(); // prevent reload
		$("#btn-contact").addClass('disabled')
		$("#btn-contact span").removeClass('d-none')
		var formData = new FormData(this);
		formData.append('service_id', 'service_z51zg05');
		formData.append('template_id', 'template_htdsref');
		formData.append('user_id', 'MmRnyuNHVyBFAIZnk');

		$.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
			type: 'POST',
			data: formData,
			contentType: false, // auto-detection
			processData: false // no need to parse formData to string
		}).done(function () {
			Toastify({
				text: "Your message is sent to me. I will get you back soon.",
				duration: 5000,
				newWindow: true,
				close: true,
				gravity: "top", // `top` or `bottom`
				position: "center", // `left`, `center` or `right`
				stopOnFocus: true, // Prevents dismissing of toast on hover
				style: {
					background: "linear-gradient(to right, #00b09b, #96c93d)",
				},
				onClick: function () { 
					alert('')
				} // Callback after click
			}).showToast();
			$("#btn-contact").removeClass('disabled')
			$("#btn-contact span").addClass('d-none')
			$("#user_name").val('')
			$("#message").val('')
			$("#subject").val('')
			$('#reply_to').val('')
		}).fail(function (error) {
			Toastify({
				text: SON.stringify(error),
				duration: 5000,
				newWindow: true,
				close: true,
				gravity: "top", // `top` or `bottom`
				position: "center", // `left`, `center` or `right`
				stopOnFocus: true, // Prevents dismissing of toast on hover
				style: {
					background: "red",
				},
				onClick: function () { } // Callback after click
			}).showToast();
		});
	});
})

// Text animation
const textAnimLoad = () => {
	let textElement = document.querySelector('.text-anim')
	setTimeout(() => {
		textElement.textContent = 'SOFTWARE ENGINEER'
	}, 0)
	setTimeout(() => {
		textElement.textContent = 'BACK END DEVELOPER'
	}, 4000)
	setTimeout(() => {
		textElement.textContent = 'FRONT END DEVELOPER'
	}, 8000)

	setTimeout(() => {
		textElement.textContent = 'APP DEVELOPER'
	}, 12000)

}