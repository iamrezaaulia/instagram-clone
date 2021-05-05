export function seedDatabase(firebase) {
    const users = [
        {
            userId: 'q1bBiXPCNXWZFgQYdAYjkNa6iA63',
            username: 'reza',
            fullname: 'Reza Aulia',
            emailAddress: 'iam.rezaaulia@gmail.com',
            following: ['mkVbbjjTjFMWqMXR7vPaB3SIsB22'],
            followers: ['mkVbbjjTjFMWqMXR7vPaB3SIsB22'],
            dateCreated: Date.now()
        },
        {
            userId: 'mkVbbjjTjFMWqMXR7vPaB3SIsB22',
            username: 'aulia',
            fullname: 'Aulia Reza',
            emailAddress: 'iam.rezawork@gmail.com',
            following: ['q1bBiXPCNXWZFgQYdAYjkNa6iA63'],
            followers: ['q1bBiXPCNXWZFgQYdAYjkNa6iA63'],
            dateCreated: Date.now()
        }
    ];

    for (let i = 0; i < users.length; i++) {
        firebase.firestore().collection('users').add(users[i]);
    }
}