const rootDirname = require('../root').rootDirname

/**
 * Strips out path specific output from webpack config snapshots.
 * i.e. /Users/Rich/Projects/react-boilerplate/src -> <rootDir>/src
 *
 * e.g.
 * expect.addSnapshotSerializer(webpackConfigSnapshotSerializer);
 * expect({ __webpack_config__: config }).toMatchSnapshot();
 *
 * NOTE: Ideally we'd just mock `__dirname` when testing Webpack configs,
 * however jest doesn't offer a way to do it.
 */

module.exports = {
  test(val) {
    return !!val.__webpack_config__
  },

  print(val, serialize) {
    const rootDirnameRegex = new RegExp(rootDirname, 'g')

    return serialize(val.__webpack_config__).replace(rootDirnameRegex, '<rootDir>')
  }
}
