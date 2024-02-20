'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.BrandValidation = void 0;
// Define your validations here
const zod_1 = require('zod');
const create = zod_1.z.object({
  body: zod_1.z.object({
    title: zod_1.z.string({
      required_error: 'Brand name is required',
    }),
  }),
});
const update = zod_1.z.object({
  body: zod_1.z.object({
    title: zod_1.z.string().optional(),
  }),
});
exports.BrandValidation = {
  create,
  update,
};
