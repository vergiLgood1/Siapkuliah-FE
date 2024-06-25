// utils/stripe.ts
import { Stripe, loadStripe } from '@stripe/stripe-js';

const stripePromise: Promise<Stripe | null> = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY}`);

stripePromise.then(stripe => {
  if (stripe) {
    console.log(`tes = ${stripe}`);  // This will log the actual Stripe object
  } else {
    console.error('Error loading Stripe');
  }
});

export default stripePromise;
