"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeService = void 0;
const common_1 = require("@nestjs/common");
const stripe_1 = require("stripe");
let StripeService = class StripeService {
    constructor() {
        this.stripe = new stripe_1.default('sk_test_51OPsP7H0uRtrpw0mG6BhPkf7lkSwFzxQ7K0Rvk7SB9EpuSL3DndpfrnJFnvlSKOKQXyvrNpMKMxvtTkZFVWYKXU800SaiXsCBO', {
            apiVersion: '2024-06-20',
        });
    }
    async createCheckoutSession(totalPrice, propertyId, paymentMethodTypes, successUrl, cancelUrl) {
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
                            unit_amount: totalPrice * 100,
                        },
                        quantity: 1,
                    },
                ],
                mode: 'payment',
                success_url: successUrl,
                cancel_url: cancelUrl,
            });
            return session;
        }
        catch (error) {
            throw new Error(`Stripe Checkout error: ${error.message}`);
        }
    }
};
exports.StripeService = StripeService;
exports.StripeService = StripeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], StripeService);
//# sourceMappingURL=stripe.service.js.map