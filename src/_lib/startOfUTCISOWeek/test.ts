/* eslint-env mocha */

import assert from 'assert'
import startOfUTCISOWeek from '.'

describe('startOfUTCISOWeek', () => {
  it('returns the date with the time set to 00:00:00 and the date set to the first day of an ISO week', () => {
    const date = new Date(Date.UTC(2014, 8 /* Sep */, 2, 11, 55, 0))
    const result = startOfUTCISOWeek(date)
    assert.deepStrictEqual(result, new Date(Date.UTC(2014, 8 /* Sep */, 1)))
  })

  it('accepts a timestamp', () => {
    const date = new Date(Date.UTC(2014, 1 /* Feb */, 11, 11, 55, 0)).getTime()
    const result = startOfUTCISOWeek(date)
    assert.deepStrictEqual(result, new Date(Date.UTC(2014, 1 /* Feb */, 10)))
  })

  it('does not mutate the original date', () => {
    const date = new Date(Date.UTC(2014, 8 /* Sep */, 2, 11, 55, 0))
    startOfUTCISOWeek(date)
    assert.deepStrictEqual(
      date,
      new Date(Date.UTC(2014, 8 /* Sep */, 2, 11, 55, 0))
    )
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    const result = startOfUTCISOWeek(new Date(NaN))
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    assert.throws(startOfUTCISOWeek.bind(null), TypeError)
  })
})
