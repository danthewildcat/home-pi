/* @flow */

export type Client = {|
  +id: string,
  +name?: ?string,
|};

export type Subject = {
  +id: string | number,
  +username?: ?string,
  +password?: ?string,
};
