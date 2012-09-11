
# in-groups-of

  Return an array of arrays in groups of N

## Installation

```
$ component install component/in-groups-of
```

## Example

```js
var nums = [1,2,3,4,5,6,7,8,9,10];

inGroupsOf(nums, 5)
// => [[1,2,3,4,5], [6,7,8,9,10]]

inGroupsOf(nums, 4)
// => [[1,2,3,4], [5,6,7,8], [9,10]]

inGroupsOf(nums, 2)
//=> [[1,2], [3,4], [5,6], [7,8], [9,10]]
```

# License

  MIT
