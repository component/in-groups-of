
var inGroupsOf = require('..');
var nums = [1,2,3,4,5,6,7,8,9,10];

describe('inGroupsOf(arr, n)', function(){
  it('should return array in groups of N', function(){
    inGroupsOf(nums, 5)
      .should.eql([[1,2,3,4,5], [6,7,8,9,10]]);

    inGroupsOf(nums, 4)
      .should.eql([[1,2,3,4], [5,6,7,8], [9,10]]);

    inGroupsOf(nums, 2)
      .should.eql([[1,2], [3,4], [5,6], [7,8], [9,10]]);

    inGroupsOf([], 1).should.eql([]);
    inGroupsOf([], 5).should.eql([]);
    inGroupsOf([], 5).should.eql([]);
  })
})