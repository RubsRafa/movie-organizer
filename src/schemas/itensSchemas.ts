import joi from 'joi';

const itemSchema = joi.object({
    name: joi.string().not('').min(3).required(),
    genre: joi.number().not('').required(),
    platform: joi.number().not('').required(),
    status: joi.number().not('').required()
})

export default {
    itemSchema
}