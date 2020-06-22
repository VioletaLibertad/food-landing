export const validatedText = value => {
  if (value.length >= 3) {
    return true;
  } else {
    return false;
  }
};

export const validatedEmail = value => {
  return /.*@[a-zA-Z0-9]+\..+$/.test(value);
};

export const validatedPhone = value => {
  return value.match(/\d/g).length > 8;
};