const { readFileSync, writeFileSync } = require('fs');
const path = require('path');

const p = path.join(__dirname, './generated/api_pb.js');
const f = `/* eslint-disable */
${readFileSync(p, 'utf8')}`;

writeFileSync(p, f, 'utf8');
