module.exports = function getLoveTrianglesCount(inputArr = [])
{
    // your implementation
    var triangles = 0;
    var ignoreList = [];
    for (var i = 0; i < inputArr.length; i++)
    {
        if (ignoreList.indexOf(i) !== -1)
        {
            continue;
        }

        var currenChainList = [];
        currenChainList.push(i);
        var currLover = i;
        while (true)
        {
            currLover = inputArr[currLover] - 1;

            if (ignoreList.indexOf(currLover) !== -1)
            {
                break;
            }

            var inArray = currLover < inputArr.length;
            if (!inArray)
            {
                currenChainList.push(i);
                break;
            }

            var prevSameLoverPosition = currenChainList.indexOf(currLover);
            if (prevSameLoverPosition >= 0)
            {
                if ((currenChainList.length - prevSameLoverPosition) === 3)
                {
                    triangles += 1;
                }
                break;
            }
            else
                {
                    currenChainList.push(currLover);
                }
        }

        ignoreList = ignoreList.concat(currenChainList);
    }
    return triangles;
}