/* eslint-disable no-unused-vars */
const { body } = require('express-validator');

const taskValidate = [
  body('name')
    .exists({ checkFalsy: true })
    .withMessage('Name Task is required')
    .isString(),
  body('description').optional().isString(),
  body('completed').optional().isBoolean(),
];

const updateTaskValidate = [
  body('name')
    .optional({ checkFalsy: true })
    .isString()
    .withMessage('Name value must be a String'),
  body('description')
    .optional()
    .isString()
    .withMessage('Description value must be a String'),
  body('completed')
    .optional()
    .isBoolean()
    .withMessage('Completed value must be a Boolean'),
];

module.exports = { taskValidate, updateTaskValidate };
