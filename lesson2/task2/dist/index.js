"use strict";

var _profile = require("./profile.js");

const userData = {
  name: 'Tom',
  age: 17
};
const profile = { ...userData,
  company: 'Gromcode'
};
(0, _profile.printProfile)(profile);