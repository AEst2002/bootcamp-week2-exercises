// Write your Pet model here!

const { HasOneRelation } = require('./BaseModel')
const BaseModel = require('./BaseModel')
const User = require('./User')

class Pet extends BaseModel {
    static get tableName() {
        return 'pets'
    }
    static get relationMappings() {
        return {
            users: {
                relation: HasOneRelation,
                modelClass: User,
                join: {
                from: 'pets.ownerId',
                to: 'users.id'
                }
            }
        }
    }
}

module.exports = Pet