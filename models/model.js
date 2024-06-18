import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: false
    },
    tel: {
        type: String,
        required: true,
        unique: false
    }
});

const SchemaExtensive = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: false
    },
    tel: {
        type: String,
        required: true,
        unique: false
    },
    type: {
        type: Number,
        required: true,
        unique: false
    },
    width: {
        type: Number,
        required: true,
        unique: false
    },
    height: {
        type: Number,
        required: true,
        unique: false
    },
    glass: {
        type: String,
        required: true,
        unique: false
    },
    glass2: {
        type: String,
        required: true,
        unique: false
    }
});

const SchemaPacyansProfile = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: false
    },
    elo: {
        type: Number,
        required: true,
        unique: false
    },
    bestEasy: {
        type: Number,
        required: true,
        unique: false
    },
    bestHard: {
        type: Number,
        required: true,
        unique: false
    },
    wins: {
        type: Number,
        required: true,
        unique: false
    },
    fails: {
        type: Number,
        required: true,
        unique: false
    },
    fullName: {
        type: String,
        required: true,
        unique: false
    },
    url: {
        type: String,
        required: true,
        unique: false
    },
});

export const lodzi  = new mongoose.model('Zamer', Schema);
export const lodziExtensive  = new mongoose.model('ZamerExtensive', SchemaExtensive);
export const pacyansProfile  = new mongoose.model('pasyans_profile', SchemaPacyansProfile);