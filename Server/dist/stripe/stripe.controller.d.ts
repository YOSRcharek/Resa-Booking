import { StripeService } from './stripe.service';
import Stripe from 'stripe';
export declare class StripeController {
    private readonly stripeService;
    constructor(stripeService: StripeService);
    createCheckoutSession(body: {
        totalPrice: number;
        propertyId: string;
        paymentMethodTypes: Stripe.Checkout.SessionCreateParams.PaymentMethodType[];
        successUrl: string;
        cancelUrl: string;
    }): Promise<{
        url: string;
    }>;
}
