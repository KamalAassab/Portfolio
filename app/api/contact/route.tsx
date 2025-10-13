import { type NextRequest, NextResponse } from "next/server"

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message, honeypot } = body

    // Honeypot check - if filled, it's likely a bot
    if (honeypot) {
      return NextResponse.json({ error: "Invalid submission" }, { status: 400 })
    }

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    if (message.length < 10) {
      return NextResponse.json({ error: "Message must be at least 10 characters" }, { status: 400 })
    }

    // TODO: Integrate with email service
    // Example integrations:

    // 1. SendGrid:
    // const sgMail = require('@sendgrid/mail')
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    // await sgMail.send({
    //   to: 'your-email@example.com',
    //   from: 'noreply@yourdomain.com',
    //   subject: `Portfolio Contact: ${subject}`,
    //   text: `From: ${name} (${email})\n\n${message}`,
    //   html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
    // })

    // 2. Postmark:
    // const postmark = require('postmark')
    // const client = new postmark.ServerClient(process.env.POSTMARK_API_KEY)
    // await client.sendEmail({
    //   From: 'noreply@yourdomain.com',
    //   To: 'your-email@example.com',
    //   Subject: `Portfolio Contact: ${subject}`,
    //   TextBody: `From: ${name} (${email})\n\n${message}`,
    // })

    // 3. Nodemailer (SMTP):
    // const nodemailer = require('nodemailer')
    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: process.env.SMTP_PORT,
    //   auth: {
    //     user: process.env.SMTP_USER,
    //     pass: process.env.SMTP_PASS,
    //   },
    // })
    // await transporter.sendMail({
    //   from: 'noreply@yourdomain.com',
    //   to: 'your-email@example.com',
    //   subject: `Portfolio Contact: ${subject}`,
    //   text: `From: ${name} (${email})\n\n${message}`,
    // })

    // For now, just log the message (remove in production)
    console.log("Contact form submission:", { name, email, subject, message })

    return NextResponse.json({ success: true, message: "Message sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
