export interface MailAddress {
    name: string;
    address: string;
    domain: () => string;
}

export interface MailMessage {
    id: string;
    from: MailAddress;
    to: MailAddress[];
    cc?: MailAddress[];
    bcc?: MailAddress[];
    subject: string;
    text?: string;
    html?: string;
    receivedAt: Date;
}