export {default as UserAccount} from './UserAccount';

import { sequelize } from '../../connections';

// for (let m in sequelize.models) {
//     sequelize.models[m].sync();
// }

// Init association
for (let m in sequelize.models) {
    sequelize.models[m].association();
}