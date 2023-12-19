import {WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer} from '@nestjs/websockets';

@WebSocketGateway()
export class PushNotificationGateway {
    @WebSocketServer()
    server: Server;

    @SubscribeMessage('agent-notification')
    handleEvent(@MessageBody() data: any): string {
        // Handle the event and broadcast it to the connected clients
        return 'Hello World!';
    }
}
