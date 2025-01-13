import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailData {
  name: string;
  phoneNumber: string;
  telegram: string;
  trainingType: string;
  date: Date;
}

export async function POST(request: Request) {
  try {
    const emailData: EmailData = await request.json();

    const { data, error } = await resend.emails.send({
      from: "Body Update <support@body-update.com.ua>",
      to: ["lf.body.update@gmail.com"],
      subject: "Новий запис на зайняття",
      react: EmailTemplate(emailData),
    });

    console.log(emailData);

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
