import { MessagesRepository } from "./messages.repository";

export class MessagesService {
    messagesRepo: MessagesRepository;

    constructor() {
        // Service is creating its own dependencies
        // DON'T DO THIS ON REAL APPLICATIONS
        this.messagesRepo = new MessagesRepository();
    }
}