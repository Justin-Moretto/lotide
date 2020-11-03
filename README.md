# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @justin-moretto/lotide`

**Require it:**

`const _ = require('@justin-moretto/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: takes an array and returns the 0 index
* `tail(array)`: takes an array and returns it minus the 0 index
* `middle(array)`: returns one middle element of an array (or two elements, if array.length is even)
* `assertArraysEqual(actual, expected)`: compares two arrays and returns a bool
* `assertEqual(actual, expected)`: compares two primitive data types and returns a bool
* `assertObjectsEqual(actual, expected))`: compares two objects and returns a bool
* `countLetters(string)`: counts how many times each letter occurs in a string, returns an object
* `countOnly(allItems, ItemstoCount)`: takes an array and an object; takes in a collection of items and return counts for a specific subset of those items; returns an object
* `eqArrays(array1, array2)`: takes in two arrays and returns true or false, based on a perfect match
* `eqObjects()`: description
* `findKey()`: description
* `findKeyByValue(object, value)`: search for a key on an object with given value
* `flatten()`: Given an array with other arrays inside, flattens it into a single-level array.
* `letterPositions(string)`: return all indices in a string where each character is found; returns object
* `takeUntil()`: description
* `without()`: return a subset of a given array, removing unwanted elements.
* `map(array, callback)`: return a new array based on the results of the callback function.