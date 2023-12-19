import { Module } from '@nestjs/common';
import { PusherModule } from 'nestjs-pusher';
import { PushNotificationModule } from './websockets/pusher.module'
@Module({
  imports: [
    PusherModule.forRoot({
      appId: '1726437',
      key: '32a2614f3a518578d90a',
      secret: '8b745333164be78f7361',
      cluster: 'ap2',
      encrypted: true,
    }),
    PushNotificationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}