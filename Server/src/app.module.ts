import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertiesModule } from './properties/properties.module';
import { MongooseModule } from '@nestjs/mongoose';
import { HostsModule } from './hosts/hosts.module';
import { ReservationsModule } from './reservations/reservations.module';
import { ReviewsModule } from './reviews/reviews.module';
import { AvailabilityModule } from './availability/availability.module';
import { Cors } from './cors.middleware';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './users/users.module';
import { StripeModule } from './stripe/stripe.module';


@Module({
  imports: [PropertiesModule,MongooseModule.forRoot('mongodb+srv://amirch:resa123@resa.8kkkqma.mongodb.net/Resa'), HostsModule, ReservationsModule, ReviewsModule, AvailabilityModule ,AuthModule,UserModule, StripeModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(Cors).forRoutes('*');
  }
}
// src/app.module.ts