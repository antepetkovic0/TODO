const bcrypt = require('bcrypt');

export const hashPassword = async (password) => {
    try {
        const hash = await bcrypt.hash(password, 10);
        return hash;
    } catch (e) {
        throw Error("Error in hashing password.");
    }
} 

export const checkPassword = async (password, hash) => {
    try {
        const match = await bcrypt.compare(password, hash);
        return match;
    } catch (e) {
        throw Error("Error in checking password.");
    }
}

