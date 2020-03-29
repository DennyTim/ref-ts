import {
    User,
    UserProps
} from "./models/User";
import { Collection } from "./models/Collection";
import { UserList } from "./views/UserList";

const users = new Collection(
    'http://localhost:3000/users',
    (json: UserProps) => {
        return User.buildUser(json);
    }
);

users.fetch();
users.on('change', () => {
    const root = document.getElementById('root');
    if (root) {
       new UserList(root, users).render();
    }
});

// const user = User.buildUser({ name: 'Name', age: 20});
// const root = document.getElementById('root');
//
// if(root) {
//     const userEdit = new UserEdit(root, user);
//     userEdit.render();
//     console.log(userEdit);
// } else {
//     throw new Error('Root element not found');
// }
