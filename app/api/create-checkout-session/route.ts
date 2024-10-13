import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-08-16',
});

export async function POST(req: Request) {
  if (req.method === 'POST') {
    try {
      const { priceId } = await req.json();

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${req.headers.get('origin')}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.get('origin')}/shop`,
      });

      return NextResponse.json({ id: session.id });
    } catch (err: any) {
      return NextResponse.json({ statusCode: 500, message: err.message });
    }
  } else {
    return NextResponse.json({ statusCode: 405, message: 'Method Not Allowed' });
  }
}