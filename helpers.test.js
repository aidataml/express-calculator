const {calculateMean, calculateMedian, calculateMode,} = require("./helpers");
   
  describe("#calculateMean", function () {
    it("finds the mean of an empty array", function () { 
      expect(calculateMean([])).toEqual(0)
    })
    it("finds the mean of an array of numbers", function () { 
      expect(calculateMean([6,2,4,8])).toEqual(5)
    })
  })

  describe("#calculateMedian", function(){
    it("finds the median of an even set", function(){ 
      expect(calculateMedian([6, 2, 1, 8])).toEqual(4)
    })
    it("finds the median of an odd set", function () { 
      expect(calculateMedian([2, -5, 6])).toEqual(2)
    })
  })
  
  describe("#calculateMode", function () {
    it("finds the mode", function () { 
      expect(calculateMode([1,3,3,4,1,3])).toEqual(3)
    })
  })