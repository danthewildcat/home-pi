/* @flow */

export type Client = {|
  +id: string,
  +name?: ?string,
|};

export type User = {
  +id: string | number,
  +username?: ?string,
  +password?: ?string,
};
