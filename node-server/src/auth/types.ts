export type Client = {|
  +id: string,
  +name: string,
  +isValid: boolean,
|};

export type Subject = {
  +id: string | number,
  +username?: ?string,
  +password?: ?string,
};
