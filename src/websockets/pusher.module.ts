// src/websockets/your.module.ts

import { Module } from '@nestjs/common';
import { PushNotificationGateway } from './pusher.gateway';

@Module({
    providers: [PushNotificationGateway],
})
export class PushNotificationModule {}
