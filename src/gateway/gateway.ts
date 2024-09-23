import { WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway({ origin: '' })
export class Gateway {}
