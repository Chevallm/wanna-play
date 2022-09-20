import firebase from 'firebase/compat/app';

export class User {
    uid: string = '';
    name: string = '';

    static fromFirebase(firebaseUser: firebase.User): User {
        return {
            uid: firebaseUser!.uid,
            name: firebaseUser!.displayName ?? 'Unknow user'
        }
    }
}

