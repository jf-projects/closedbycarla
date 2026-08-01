import { NextResponse } from "next/server";
import { transporter } from "@/src/components/lib/mail";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const {
            name,
            email,
            phone,
            subject,
            message,
        } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Required fields missing",
                },
                { status: 400 }
            );
        }

        await transporter.sendMail({
            from: `"Closed by Carla" <${process.env.EMAIL_USER}>`,
            to: process.env.CONTACT_EMAIL,
            replyTo: email,
            subject: `Closed by Carla Inquiry: ${subject || "Website Contact"}`,
            html: `
                <h2>New Website Inquiry</h2>

                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
                <p><strong>Subject:</strong> ${subject || "No Subject"}</p>

                <hr/>

                <p>${message}</p>
            `,
        });

        return NextResponse.json({
            success: true,
            message: "Email sent successfully",
        });

    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to send email",
            },
            {
                status: 500,
            }
        );
    }
}