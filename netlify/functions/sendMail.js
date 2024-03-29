const sgMail = require('@sendgrid/mail');
const fetch = require('node-fetch'); // Ensure 'node-fetch' is available if you're using Node.js version < 17.5.0

sgMail.setApiKey(process.env.GATSBY_SENDGRID_API_KEY);

exports.handler = async (event) => {
	const { name, email, message } = JSON.parse(event.body);

	const msg = {
		to: ['lizbrooks@breakthroughcoaching.pro', 'kimharris@feartofiercecoach.com'],
		from: 'Positive Professionals <no-reply@positiveprofessionals.net>',
		subject: `✦ New consultation request from ${name} ✦`,
		text: `Message from ${name} (${email}): ${message}`,
		html: `<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
    <tr>
        <td align="center" style="padding: 10px;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                    <td align="center" style="padding-bottom: 12px;">
                        <h2 style="margin: 0;">Contact Information</h2>
                    </td>
                </tr>
                <tr>
                    <td align="center">
                        <span><strong>Name:</strong> ${name}</span>
                    </td>
                </tr>
                <!-- This row will have the border under the email, spanning full width -->
                <tr>
                    <td style="border-bottom: 3px solid rgba(18, 18, 18, 0.1); padding-bottom: 12px;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                                <td align="center">
                                    <span><strong>Email:</strong> ${email}</span>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td align="center" style="padding-top: 12px;">
                        <span><strong>Client message:</strong> ${
													message.length > 0 ? message : 'N/A'
												}</span>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>`,
	};

	try {
		await sgMail.send(msg);
		return {
			statusCode: 200,
			body: JSON.stringify({ message: 'Email sent successfully' }),
		};
	} catch (error) {
		console.error(error);
		if (error.response) {
			console.error(error.response.body);
		}
		return {
			statusCode: error.code || 500,
			body: JSON.stringify({ error: error.message }),
		};
	}
};
