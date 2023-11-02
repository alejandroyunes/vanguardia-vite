import { describe, expect, it } from 'vitest'




const fizzBuzz = (num) => {
  
  if(typeof num !== 'number') throw new Error('Not a number')

  let outout = ''

}

fizzBuzz(15)

describe('Fizzbuzz func', () => {

  it('Fizzbuzz should be a function', () => {
    expect(typeof fizzBuzz).toBe('function')
  })

  it('Should throw error if not a number', () => {
    expect(() => fizzBuzz('')).toThrow()
  })

  it('Should throw specific error if not a number provided', () => {
    expect(() => fizzBuzz('')).toThrow('Not a number')
  })

})