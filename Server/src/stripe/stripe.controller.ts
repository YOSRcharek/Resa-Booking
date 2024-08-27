import { Controller, Post, Body } from '@nestjs/common';
import { StripeService } from './stripe.service';
import Stripe from 'stripe';

@Controller('stripe')
export class StripeController {
  constructor(private readonly stripeService: StripeService) {}

  @Post('create-checkout-session')
  async createCheckoutSession(
    @Body() body: {
      totalPrice: number,
      propertyId: string,
      paymentMethodTypes: Stripe.Checkout.SessionCreateParams.PaymentMethodType[],
      successUrl: string,
      cancelUrl: string
    }
  ) {
    const { totalPrice, propertyId, paymentMethodTypes, successUrl, cancelUrl } = body;

    // Call the service method with the extracted data
    const session = await this.stripeService.createCheckoutSession(
      totalPrice,
      propertyId,
      paymentMethodTypes,
      successUrl,
      cancelUrl
    );

    // Return the session ID to the frontend
    return { url: session.url };
  }
}