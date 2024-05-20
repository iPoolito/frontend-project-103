import getDiff from '../src/utils/diff.js';
import {
  ADD_VALUE, DELETED_VALUE, UNCHANGED_VALUE, CHANGED_VALUE,
} from '../src/constants';

test('compare flat JSON files', () => {
  const dataFile1 = {
    host: 'codica.io',
    timeout: 50,
    proxy: '123.234.53.22',
    follow: false,
  };
  const dataFile2 = {
    timeout: 20,
    verbose: true,
    host: 'codica.io',
  };

  const expectedDiff = {
    type: 'root',
    children: [
      { key: 'follow', type: DELETED_VALUE, value: false },
      { key: 'host', type: UNCHANGED_VALUE, value: 'codica.io' },
      { key: 'proxy', type: DELETED_VALUE, value: '123.234.53.22' },
      {
        key: 'timeout', type: CHANGED_VALUE, value1: 50, value2: 20,
      },
      { key: 'verbose', type: ADD_VALUE, value: true },
    ],
  };
  expect(getDiff({ dataFile1, dataFile2 })).toEqual(expectedDiff);
});
