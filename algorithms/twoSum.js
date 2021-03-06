var twoSum = function(nums, target) {
    
    // create a container to hold previous values 
    // find the needed sum from current element and sum..
    // loop through and ask 
    // if --> (sum - current element) --> needed value exists in prev values
    // return [prevVal, curVal]
    
    // no sums in arr
    // if nums is empty
    
    // in js apparently objects come back as undefined..
    
    let preVal = {};
    preVal[nums[0]] = 0
    
    for(let i = 1; i < nums.length; i++) {
        let needVal = target - nums[i];
        if(preVal[needVal] !== undefined) return [preVal[needVal], i]
        else preVal[nums[i]] = i
    }
    return []
};