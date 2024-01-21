const User = require('../models/user');
const Admin = require('../models/admin');

const adminController = {
    getAllAdmins: async (req, res) => {
        try {
            const admins = await Admin.find(); 
            res.json(admins);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    deleteAdminById: async (req, res) => {
        const adminId = req.params.id;
        try {
            await Admin.findByIdAndDelete(adminId);
            res.json({ message: 'Admin deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getAllUsers: async (req, res) => {
        try {
            const users = await User.find();
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    deleteUserById: async (req, res) => {
        const userId = req.params.id;
        try {
            await User.findByIdAndDelete(userId);
            res.json({ message: 'User deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },



    // dropTag: async (req, res) => {
    //     Tag.collection.drop()
    //         .then(() => {
    //             console.log('Tag collection dropped successfully.');
    //         })
    //         .catch((err) => {
    //             console.error('Error dropping Tag collection:', err);
    //         });
    // },
  
};

module.exports = adminController;