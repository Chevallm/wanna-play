import {User} from './user';

export class Party {
    uid: string = '';
    game: string = '';
    maxSlots: number = 0;
    participants: User[] = [];
    date: Date = new Date();
    owner: User = new User();

    constructor(init?: Partial<Party>) {
        Object.assign(this, init);
    }

    get isFull(): boolean {
        return this.maxSlots < this.participants.length;
    }
}
