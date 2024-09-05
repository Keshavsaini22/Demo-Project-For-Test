const { User } = require('../models');
require('dotenv').config();

const { checkConnection } = require('../config/db_connection');

async function createAdmin() {
    try {
        await checkConnection();
        const adminUser = await User.create({
            first_name: 'Keshav',
            last_name: 'Saini',
            email: 'admin@gmail.com',
            role: 'admin',
            username: 'admin1',
            password: '$2b$10$R86mW.cnDeP/WPq90bJvh.7Y9uBaOuiBuap7BEDYsvrMZycCtzl5q',  //deep@123
            joins_at: new Date(),
            created_at: new Date(),
            updated_at: new Date(),
        })
        console.log('Admin user created successfully:', adminUser.toJSON());
    } catch (error) {
        console.log('error: ', error);
    }

}

createAdmin()