import Stripe from 'stripe';
export declare class StripeService {
    private stripe;
    constructor();
    createCheckoutSession(totalPrice: number, propertyId: string, paymentMethodTypes: Stripe.Checkout.SessionCreateParams.PaymentMethodType[], successUrl: string, cancelUrl: string): Promise<Stripe.Response<Stripe.Checkout.Session>>;
}
