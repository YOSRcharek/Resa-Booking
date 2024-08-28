import { HttpService } from '@nestjs/axios';
import Stripe from 'stripe';
export declare class StripeService {
    private readonly httpService;
    private stripe;
    private readonly endpointSecret;
    constructor(httpService: HttpService);
    createCheckoutSession(totalPrice: number, property_id: string, paymentMethodTypes: Stripe.Checkout.SessionCreateParams.PaymentMethodType[], successUrl: string, cancelUrl: string, user_id: string, checkInDate: string, checkOutDate: string, adult_guests: number, minor_guests: number): Promise<Stripe.Response<Stripe.Checkout.Session>>;
    handleEvent(event: Stripe.Event): Promise<void>;
    constructEvent(body: Buffer, signature: string): Stripe.Event;
    private createReservation;
}
