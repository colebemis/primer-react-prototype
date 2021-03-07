const docgen = require('react-docgen-typescript');
const path = require('path');
const globby = require('globby');
const fs = require('fs');

const paths = globby.sync(path.join(__dirname, '../src/*.tsx'));

const result = paths.flatMap(path =>
  docgen.parse(path, { savePropValueAsString: true })
);

fs.writeFileSync(
  path.join(__dirname, '../dist/metadata.json'),
  JSON.stringify(result)
);
