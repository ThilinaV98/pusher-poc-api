import { Controller, Get } from '@nestjs/common';
import { PusherService } from 'nestjs-pusher';

@Controller('pusher')
export class PushNotificationController {
  constructor(private readonly pusherService: PusherService) {}

  @Get('send-notification')
  sendNotification(): string {
    // Trigger the event and send data to the Pusher channel
    this.pusherService.trigger('YOUR_CHANNEL_NAME', 'YOUR_EVENT_NAME', {
      message: 'Hello from NestJS!',
    });

    return 'Notification sent';
  }
}
