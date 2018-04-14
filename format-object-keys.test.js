const formatObjectKeys = require('./format-object-keys')

describe('format-object-keys', () => {
  it('should format keys of a single hash', () => {
    // assign
    const obj = {
      name: 'Kunal',
      location: 'London'
    }
    const formatter = key => key.toUpperCase()
    // act
    const result = formatObjectKeys(obj, formatter)
    // assert
    expect(result).toEqual({
      NAME: 'Kunal',
      LOCATION: 'London'
    })
  })

  it('should return non object type', () => {
    // assign
    const obj = 42
    const formatter = key => key.toUpperCase()
    // act
    const result = formatObjectKeys(obj, formatter)
    // assert
    expect(result).toEqual(obj)
  })

  it('should format object keys within arrays', () => {
    // assign
    const obj = [1, 'two', { three: 'Is the lucky number' }]
    const formatter = key => key.toUpperCase()
    // act
    const result = formatObjectKeys(obj, formatter)
    // assert
    expect(result).toEqual([1, 'two', { THREE: 'Is the lucky number' }])
  })

  it('should format keys in nested object/array data structures', () => {
    // assign
    const obj = {
      a: 1,
      b: [
        2,
        {
          'three': 'Is the lucky number',
          4: { 'five': 6 }
        },
        null
      ],
      'last': 'end'
    }
    const formatter = key => typeof key === 'string' ? key.toUpperCase() : key
    // act
    const result = formatObjectKeys(obj, formatter)
    // assert
    expect(result).toEqual({
      A: 1,
      B: [
        2,
        {
          'THREE': 'Is the lucky number',
          4: { 'FIVE': 6 }
        },
        null
      ],
      'LAST': 'end',
    })
  })

  it('should handle new Objects as keys', () => {
    // assign
    const d = new Date()
    const obj = {
      [d]: 1
    }
    const formatter = key => typeof key === 'string' ? key.toUpperCase() : key
    // act
    const result = formatObjectKeys(obj, formatter)
    // assert
    expect(result).toEqual({
      [formatter(String(d))]: 1
    })
  })
})
