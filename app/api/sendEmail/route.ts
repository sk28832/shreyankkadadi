import nodemailer from "nodemailer";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const formData: FormData = await request.json();

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // Your email address
        pass: process.env.GMAIL_PASSWORD, // Your email password
      },
    });

    // Define the email options
    const mailOptions = {
      from: process.env.GMAIL_USER, // Your email address
      to: process.env.GMAIL_USER, // Recipient's email address
      subject: "New Message from Your Website",
      text: `
        Name: ${formData.firstName} ${formData.lastName}
        Email: ${formData.email}
        Message: ${formData.message}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response("Email sent successfully", { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response("Failed to send email", { status: 500 });
  }
}