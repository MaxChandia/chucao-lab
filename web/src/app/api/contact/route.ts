import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    const { nombre, correo, mensaje } = await request.json();

    if (!nombre || !correo || !mensaje) {
        return NextResponse.json({ error: 'Faltan campos requeridos.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
        return NextResponse.json({ error: 'Correo inválido.' }, { status: 400 });
    }

    try {
        await resend.emails.send({
   
            from: 'ChucaoLab Contacto <contacto@chucaolab.cl>',
            to: ['chucao.lab@uchile.cl'],
            replyTo: correo,
            subject: `Nuevo mensaje de contacto de ${nombre}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 32px; border: 1px solid #e5e7eb; border-radius: 8px;">
                    <h2 style="color: #1a1a1a; margin-bottom: 4px;">Nuevo mensaje de contacto</h2>
                    <p style="color: #6b7280; font-size: 14px; margin-top: 0;">Recibido desde el formulario de chucaolab.cl</p>
                    <hr style="border: none; border-top: 2px solid #6b8f71; margin: 24px 0;" />
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 10px 0; font-weight: bold; color: #374151; width: 140px;">Nombre</td>
                            <td style="padding: 10px 0; color: #1a1a1a;">${nombre}</td>
                        </tr>
                        <tr style="background: #f9fafb;">
                            <td style="padding: 10px 8px; font-weight: bold; color: #374151;">Correo</td>
                            <td style="padding: 10px 8px; color: #1a1a1a;">
                                <a href="mailto:${correo}" style="color: #6b8f71;">${correo}</a>
                            </td>
                        </tr>
                    </table>
                    <div style="margin-top: 24px;">
                        <p style="font-weight: bold; color: #374151; margin-bottom: 8px;">Mensaje</p>
                        <div style="background: #f9fafb; padding: 16px; border-radius: 6px; color: #1a1a1a; white-space: pre-wrap; line-height: 1.6;">
                            ${mensaje.replace(/</g, '&lt;').replace(/>/g, '&gt;')}
                        </div>
                    </div>
                    <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 32px 0 16px;" />
                    <p style="color: #9ca3af; font-size: 12px; text-align: center;">
                        Puedes responder directamente a este correo para contactar a ${nombre}.
                    </p>
                </div>
            `,
        });

        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error('Error al enviar correo:', error);
        return NextResponse.json({ error: 'Error al enviar el correo.' }, { status: 500 });
    }
}