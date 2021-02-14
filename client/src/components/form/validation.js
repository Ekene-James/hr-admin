

export const required = value => (value ? undefined : 'Required!');
export const longEnough = value =>
  value && value.length >= 3 ? undefined : 'Too short!';
export const tooLong = value =>
  value && value.length <= 20 ? undefined : 'Too Long';
export const isNumber = value =>
  value && !isNaN(value)  ? undefined : 'Not a number';
export const email = value =>
  value && /(.+)@(.+){2,}\.(.+){2,}/i.test(value)
    ? undefined
    : 'Not a Valid Email address'