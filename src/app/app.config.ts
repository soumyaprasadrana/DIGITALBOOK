// Copyright (c) 2022 Debashrit Parashar
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
export class Config {
  apiUrl: string = '';
  constructor() {
    this.apiUrl = window.location.origin;
  }
}
