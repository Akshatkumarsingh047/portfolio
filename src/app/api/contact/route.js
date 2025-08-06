import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

export async function POST(request) {
  const data = await request.json();
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const msg = {
    to:process.env.EMAIL, // Your verified sender email
    from: data.email, // Same as above (must be verified in SendGrid)
    subject: 'Inquiry from Website Contact Form',
    html: `
      <div style="max-width:600px;margin:0 auto;padding:20px;border:2px solid #48AEDD;border-radius:10px;font-family:Arial,sans-serif">
        <p style="font-size:20px;background-color:#48AEDD;color:white;padding:10px;border-radius:20px;text-align:center;font-weight:900">edubaba digital</p>
        <ul style="list-style:none;padding:0">
          <li><strong>Name:</strong> ${data.name}</li>
          <li><strong>Email:</strong> ${data.email}</li>
          <li><strong>Phone:</strong> ${data.phoneNumber}</li>
          <li><strong>Subject:</strong> ${data.subject}</li>
          <li><strong>Message:</strong><br>${data.message}</li>
        </ul>
      </div>
    `,
  };

  try {
    const response = await sgMail.send(msg);
    return NextResponse.json({
      error: false,
      message: 'Message successfully sent! Thank you for contacting me 😎',
    });
  } catch (error) {
    console.error('SendGrid Error:', error);
    return NextResponse.json({
      error: true,
      message: 'Something went wrong, please try again.',
    });
  }
}
