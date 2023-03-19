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

module.exports = { taskValidate };
