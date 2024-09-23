import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';

@WebSocketGateway({ origin: '' })
export class Gateway {
  @SubscribeMessage('message')
  onNewMessage(@MessageBody() body: any) {
    console.log(body);
  }
}
