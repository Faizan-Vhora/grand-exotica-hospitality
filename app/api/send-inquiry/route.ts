import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, destination, message } = body;

    // Format the email content
    const emailContent = `
      <html>
        <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #d4af37; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">New Travel Inquiry</h2>
            
            <div style="margin: 20px 0;">
              <h3 style="color: #333; margin-bottom: 15px;">Contact Details:</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Name:</strong></td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Destination:</strong></td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;">${destination || 'Not specified'}</td>
                </tr>
              </table>
            </div>
            
            <div style="margin: 20px 0;">
              <h3 style="color: #333;">Message:</h3>
              <div style="background-color: #f9f9f9; padding: 15px; border-left: 3px solid #d4af37; margin-top: 10px;">
                ${message || 'No message provided'}
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #666; font-size: 12px;">
              <p>This inquiry was sent from the Swiss Hotels & Resorts website</p>
              <p>Date: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Create a transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Check if environment variables are set
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('Email credentials not configured. Please set GMAIL_USER and GMAIL_APP_PASSWORD in .env.local');
      
      // Still return success for testing but log the error
      console.log('Form submission received but email not sent due to missing credentials:');
      console.log('Form Data:', { name, email, phone, destination, message });
      
      return NextResponse.json(
        { 
          message: 'Inquiry received! (Email service not configured - please contact us directly)', 
          warning: 'Email service not configured'
        },
        { status: 200 }
      );
    }

    // Email options
    const mailOptions = {
      from: `"Swiss Hotels & Resorts" <${process.env.GMAIL_USER}>`,
      to: process.env.EMAIL_TO || 'faizanvhora999@gmail.com',
      subject: `New Travel Inquiry from ${name}`,
      html: emailContent,
      replyTo: email, // Set reply-to as the customer's email
    };

    // Send the email
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent successfully:', info.messageId);
      
      return NextResponse.json(
        { message: 'Inquiry sent successfully! We will contact you soon.' },
        { status: 200 }
      );
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      
      // Log the form data even if email fails
      console.log('Form Data (email failed):', { name, email, phone, destination, message });
      
      return NextResponse.json(
        { 
          message: 'Inquiry received but email delivery failed. We will contact you soon.',
          error: 'Email delivery failed'
        },
        { status: 200 } // Still return 200 to not break the form
      );
    }

  } catch (error) {
    console.error('Error processing inquiry:', error);
    return NextResponse.json(
      { error: 'Failed to process inquiry' },
      { status: 500 }
    );
  }
}