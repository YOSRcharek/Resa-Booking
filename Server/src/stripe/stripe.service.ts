import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';

@Injectable()
export class StripeService {
  private stripe: Stripe;

  constructor() {
    this.stripe = new Stripe('sk_test_51OPsP7H0uRtrpw0mG6BhPkf7lkSwFzxQ7K0Rvk7SB9EpuSL3DndpfrnJFnvlSKOKQXyvrNpMKMxvtTkZFVWYKXU800SaiXsCBO', {
      apiVersion: '2024-06-20',
    });
  }

  async createCheckoutSession(
    totalPrice: number,
    propertyId: string,
    paymentMethodTypes: Stripe.Checkout.SessionCreateParams.PaymentMethodType[],
    successUrl: string,
    cancelUrl: string
  ) {
    try {
      const session = await this.stripe.checkout.sessions.create({
        payment_method_types: paymentMethodTypes,
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: `Booking for Property ${propertyId}`,
              },
              unit_amount: totalPrice * 100, // Stripe expects amounts in cents
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: successUrl,
        cancel_url: cancelUrl,
      });

      return session;
    } catch (error) {
      throw new Error(`Stripe Checkout error: ${error.message}`);
    }
  }
}