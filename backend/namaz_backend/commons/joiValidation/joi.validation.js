const Joi = require('joi')

module.exports = async (schema, data, validJoiSchema = false) => {
  try {
    // If validJoiSchema is true than schema argument must be in Joi Schema format
    /*
            example: {
                        name: Joi.string().min(4).max(20),
                        email: Joi.email()
                        .. etc
                    }
        */
    if (validJoiSchema) {
      return schema.validate(data)
    } else {
      const joiSchema = createJoiSchema(schema)
      return joiSchema.validate(data)
    }
  } catch (error) {
    return error
  }
}

const createJoiSchema = (schema) => {
  try {
    const joiSchema = {}
    // eslint-disable-next-line prefer-regex-literals
    const MONGO_OBJECT_ID_REGEX = new RegExp(/^[0-9a-fA-F]{24}$/)

    schema.forEach((schema_object) => {
      switch (schema_object.type) {
        case "object": {
          if (schema_object.optional) {
            joiSchema[schema_object.key] = Joi.object()
          } else {
            joiSchema[schema_object.key] = Joi.object().required()
          }
          break
        }
        case "array": {
          if (schema_object.optional) {
            joiSchema[schema_object.key] = Joi.array()
          } else {
            joiSchema[schema_object.key] = Joi.array().required()
          }
          break
        }
        case "number": {
          if (schema_object.optional) {
            joiSchema[schema_object.key] = Joi.number().allow("")
          } else {
            joiSchema[schema_object.key] = Joi.number().required()
          }
          break
        }
        case "string": {
          if (schema_object.optional) {
            joiSchema[schema_object.key] = Joi.string().allow("")
          } else {
            joiSchema[schema_object.key] = Joi.string().required()
          }
          break
        }
        case "mongoose-object-id": {
          if (schema_object.optional) {
            joiSchema[schema_object.key] = Joi.string().regex(MONGO_OBJECT_ID_REGEX)
          } else {
            joiSchema[schema_object.key] = Joi.string().regex(MONGO_OBJECT_ID_REGEX).required()
          }
          break
        }
        case "dateTime": {
          if (schema_object.optional) {
            joiSchema[schema_object.key] = Joi.date().allow("")
          } else {
            joiSchema[schema_object.key] = Joi.date().required()
          }
          break
        }
        case "array-of-mongoose-object-id": {
          if (schema_object.optional) {
            joiSchema[schema_object.key] = Joi.array().items(Joi.string().regex(MONGO_OBJECT_ID_REGEX))
          } else {
            joiSchema[schema_object.key] = Joi.array().items(Joi.string().regex(MONGO_OBJECT_ID_REGEX)).required()
          }
          break
        }
        case "boolean": {
          if (schema_object.optional) {
            joiSchema[schema_object.key] = Joi.boolean()
          } else {
            joiSchema[schema_object.key] = Joi.boolean().required()
          }
          break
        }
        case "enum": {
          if (schema_object.enums) {
            if (schema_object.optional) {
              joiSchema[schema_object.key] = Joi.string().valid(...Object.values(schema_object.enums))
            } else {
              joiSchema[schema_object.key] = Joi.string().valid(...Object.values(schema_object.enums)).required()
            }
          }
          break
        }
        case "array|string": {
          if (schema_object.optional) {
            joiSchema[schema_object.key] = Joi.alternatives().try(Joi.array(), Joi.string())
          } else {
            joiSchema[schema_object.key] = Joi.alternatives().try(Joi.array(), Joi.string()).required()
          }
          break
        }
        default:
          break
      }
    })
    return Joi.object().keys(joiSchema)
  } catch (error) {
    return error
  }
}
