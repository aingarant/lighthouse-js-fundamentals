function merge(array1,array2)
{
  let newArray = [];
  newArray=array1.concat(array2);
  newArray=newArray.sort();
  // return newArray;
  console.log(newArray)
}

merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]);