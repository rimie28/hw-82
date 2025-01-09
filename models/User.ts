import mongoose, {Model} from 'mongoose';
import bcrypt from 'bcrypt';
import { randomUUID } from "crypto";


interface UserMethods {
    checkPassword(password: string): Promise<boolean>;
    generateToken(): void;
}

type UserModel = Model<UserFields, {}, UserMethods>;

export interface UserFields {
    username: string;
    password: string;
    token: string;
}

const UserSchema = new mongoose.Schema<UserFields, UserModel, UserMethods>({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true
    },
});

UserSchema.methods.generateToken = function() {
    this.token = randomUUID();
};

UserSchema.methods.checkPassword = function(password) {
    return bcrypt.compare(password, this.password);
};

const SALT_WORK_FACTOR = 10;

UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();

    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    const hash = await bcrypt.hash(this.password, salt);

    this.password = hash;
    next();
});

export const User = mongoose.model<UserFields, UserModel>('User', UserSchema);

