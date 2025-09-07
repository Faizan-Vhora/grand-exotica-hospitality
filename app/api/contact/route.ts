import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, destination, message } = body;

    // Log the form data (in production, you would send this via email)
    console.log('=================================');
    console.log('NEW INQUIRY RECEIVED');
    console.log('=================================');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Destination:', destination);
    console.log('Message:', message);
    console.log('Time:', new Date().toLocaleString());
    console.log('=================================');
    
    // Store in a simple text file for now
    const inquiryData = `
=================================
NEW INQUIRY - ${new Date().toLocaleString()}
=================================
Name: ${name}
Email: ${email}
Phone: ${phone}
Destination: ${destination}
Message: ${message}
=================================\n\n`;

    try {
      await fs.appendFile('inquiries.txt', inquiryData);
    } catch (err) {
      console.log('Could not write to file:', err);
    }

    // Return success
    return NextResponse.json({
      success: true,
      message: 'Thank you for your inquiry! We will contact you soon at ' + email
    });

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process inquiry' },
      { status: 500 }
    );
  }
}