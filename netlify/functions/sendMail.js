const sendgridMail = require('@sendgrid/mail');
sendgridMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event) => {
	const { name, email, message } = JSON.parse(event.body);

	const content = {
		to: ['natewbrooks@gmail.com', 'mistercrabman07@gmail.com'], // Add recipients
		from: 'your-email@example.com', // Use a verified sender email address
		subject: `Positive Professionals | New Consultation Form Submission from ${name}`,
		text: message,
		html: `<p>You have a new contact form submission from:</p>
           <p><b>Name:</b> ${name}</p>
           <p><b>Email:</b> ${email}</p>
           <p><b>Message:</b> ${message}</p>`,
	};

	try {
		await sendgridMail.send(content);
		return {
			statusCode: 200,
			body: JSON.stringify({ message: 'Email sent successfully' }),
		};
	} catch (error) {
		console.error(error);
		return {
			statusCode: error.code,
			body: JSON.stringify({ error: error.message }),
		};
	}
};
