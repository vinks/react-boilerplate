/* eslint-env jest, commonjs */

const Lioness = jest.genMockFromModule('lioness')

Lioness.LionessProvider = 'LionessProvider'
Lioness.T = 'T'

module.exports = Lioness
