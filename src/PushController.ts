// your.controller.ts
import { Controller, Get } from '@nestjs/common';
import { PusherService } from 'nestjs-pusher';

@Controller('push')
export class PushNotificationController {
    constructor(private readonly pusherService: PusherService) {}

    @Get('send-event')
    sendEvent() {
        this.pusherService.trigger('your-channel', 'your-event', { your: 'data' });
        return 'Event sent';
    }
}
