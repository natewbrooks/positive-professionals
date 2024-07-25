import React from 'react';
import Layout from '../../components/Layout';
import '../../styles/privacy-policy.css';
import { marked } from 'marked';

const privacyPolicyMarkdown = `
# Privacy Policy

Protecting your private information is our priority. This Statement of Privacy applies to https://breakthroughcoaching.pro, and Liz Brooks Breakthrough Coaching LLC and governs data collection and usage. For the purposes of this Privacy Policy, unless otherwise noted, all references to Liz Brooks Breakthrough Coaching LLC include https://breakthroughcoaching.pro and Breakthrough Coaching & Consulting. The Breakthrough Coaching & Consulting website is a small business site. By using the Breakthrough Coaching & Consulting website, you consent to the data practices described in this statement.

## Collection of your Personal Information

In order to better provide you with products and services offered, Breakthrough Coaching & Consulting may collect personally identifiable information, such as your:

- First and Last Name
- E-mail Address
- Phone Number

We do not collect any personal information about you unless you voluntarily provide it to us. However, you may be required to provide certain personal information to us when you elect to use certain products or services. These may include:
- Registering for an account
- Entering a sweepstakes or contest sponsored by us or one of our partners
- Signing up for special offers from selected third parties
- Sending us an email message
- Submitting your credit card or other payment information when ordering and purchasing products and services

To wit, we will use your information for, but not limited to, communicating with you in relation to services and/or products you have requested from us. We also may gather additional personal or non-personal information in the future.

## Use of your Personal Information

Breakthrough Coaching & Consulting collects and uses your personal information to operate and deliver the services you have requested. Breakthrough Coaching & Consulting may also use your personally identifiable information to inform you of other products or services available from Breakthrough Coaching & Consulting and its affiliates.

## Sharing Information with Third Parties

Breakthrough Coaching & Consulting does not sell, rent, or lease its customer lists to third parties. Breakthrough Coaching & Consulting may share data with trusted partners to help perform statistical analysis, send you email or postal mail, provide customer support, or arrange for deliveries. All such third parties are prohibited from using your personal information except to provide these services to Breakthrough Coaching & Consulting, and they are required to maintain the confidentiality of your information.

Breakthrough Coaching & Consulting may disclose your personal information, without notice, if required to do so by law or in the good faith belief that such action is necessary to:
- Conform to the edicts of the law or comply with legal process served on Breakthrough Coaching & Consulting or the site
- Protect and defend the rights or property of Breakthrough Coaching & Consulting
- Act under exigent circumstances to protect the personal safety of users of Breakthrough Coaching & Consulting, or the public

## Tracking User Behavior

Breakthrough Coaching & Consulting may keep track of the websites and pages our users visit within Breakthrough Coaching & Consulting, in order to determine what Breakthrough Coaching & Consulting services are the most popular. This data is used to deliver customized content and advertising within Breakthrough Coaching & Consulting to customers whose behavior indicates that they are interested in a particular subject area.

## Automatically Collected Information

Information about your computer hardware and software may be automatically collected by Breakthrough Coaching & Consulting. This information can include: your IP address, browser type, domain names, access times, and referring website addresses. This information is used for the operation of the service, to maintain quality of the service, and to provide general statistics regarding use of the Breakthrough Coaching & Consulting website.

## Security of your Personal Information

Breakthrough Coaching & Consulting secures your personal information from unauthorized access, use, or disclosure. Breakthrough Coaching & Consulting uses the following methods for this purpose:
- SSL Protocol

When personal information (such as a credit card number) is transmitted to other websites, it is protected through the use of encryption, such as the Secure Sockets Layer (SSL) protocol.

We strive to take appropriate security measures to protect against unauthorized access to or alteration of your personal information. Unfortunately, no data transmission over the Internet or any wireless network can be guaranteed to be 100% secure. As a result, while we strive to protect your personal information, you acknowledge that:
- There are security and privacy limitations inherent to the Internet which are beyond our control
- Security, integrity, and privacy of any and all information and data exchanged between you and us through this Site cannot be guaranteed

## Right to Deletion

Subject to certain exceptions set out below, on receipt of a verifiable request from you, we will:
- Delete your personal information from our records
- Direct any service providers to delete your personal information from their records

Please note that we may not be able to comply with requests to delete your personal information if it is necessary to:
- Complete the transaction for which the personal information was collected, fulfill the terms of a written warranty or product recall conducted in accordance with federal law, provide a good or service requested by you, or reasonably anticipated within the context of our ongoing business relationship with you, or otherwise perform a contract between you and us
- Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity; or prosecute those responsible for that activity
- Debug to identify and repair errors that impair existing intended functionality
- Exercise free speech, ensure the right of another consumer to exercise his or her right of free speech, or exercise another right provided for by law
- Comply with the California Electronic Communications Privacy Act
- Engage in public or peer-reviewed scientific, historical, or statistical research in the public interest that adheres to all other applicable ethics and privacy laws, when our deletion of the information is likely to render impossible or seriously impair the achievement of such research, provided we have obtained your informed consent
- Enable solely internal uses that are reasonably aligned with your expectations based on your relationship with us
- Comply with an existing legal obligation
- Otherwise use your personal information, internally, in a lawful manner that is compatible with the context in which you provided the information

## Children Under Thirteen

Breakthrough Coaching & Consulting does not knowingly collect personally identifiable information from children under the age of thirteen. If you are under the age of thirteen, you must ask your parent or guardian for permission to use this website.

## E-mail Communications

From time to time, Breakthrough Coaching & Consulting may contact you via email for the purpose of providing announcements, promotional offers, alerts, confirmations, surveys, and/or other general communication.

## Changes to this Statement

Breakthrough Coaching & Consulting reserves the right to change this Privacy Policy from time to time. We will notify you about significant changes in the way we treat personal information by sending a notice to the primary email address specified in your account, by placing a prominent notice on our website, and/or by updating any privacy information. Your continued use of the website and/or Services available after such modifications will constitute your:
- Acknowledgment of the modified Privacy Policy
- Agreement to abide and be bound by that Policy

## Contact Information

Breakthrough Coaching & Consulting welcomes your questions or comments regarding this Statement of Privacy. If you believe that Breakthrough Coaching & Consulting has not adhered to this Statement, please contact Breakthrough Coaching & Consulting at:

Liz Brooks Breakthrough Coaching LLC  
5914 Grace Lee Ave  
Sykesville, Maryland 21784  

Email Address:  
lizbrooks61@gmail.com  

Telephone number:  
4432803681  

Effective as of April 14, 2022

*This is a RocketLawyer.com document.*
`;

function PrivacyPolicy() {
	return (
		<Layout>
			<div className='null:px-2 sm:px-8 md:px-20 lg:px-40 xxl:px-80 leading-snug mt-[4rem] mb-[14rem]'>
				<div className='pt-4 null:mb-20 lg:mb-40 w-full h-full flex flex-col text-start'>
					<article
						className='privacy-policy-container  text-dark dark:text-light/70 px-2'
						dangerouslySetInnerHTML={{ __html: marked(privacyPolicyMarkdown) }}
					/>
				</div>
			</div>
		</Layout>
	);
}

export default PrivacyPolicy;
