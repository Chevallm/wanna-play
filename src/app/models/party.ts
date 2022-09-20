import {User} from './user';

export interface Party {
    game: string,
    maxSlots: number,
    participants: User[],
    date: Date,
    owner: User
}
