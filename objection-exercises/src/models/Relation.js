// Write your relation model here!

const BaseModel = require('./BaseModel')
const User = require('./User')

class Relation extends BaseModel {
    static get tableName() {
        return 'relations'
    }

    static get relationMappings() {
        return {}
    }
}