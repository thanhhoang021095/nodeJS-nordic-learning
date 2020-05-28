const students = [
    {
      name: "Nam",
      age: 24,
      gender: "male",
    },
    {
      name: "Mai",
      age: 22,
      gender: "female",
    },
    {
      name: "Trang",
      age: 23,
      gender: "female",
    },
    {
      name: "An",
      age: 20,
      gender: "male",
    },
    {
      name: "Thien",
      age: 27,
      gender: "male",
    },
  ];
  
  // const doCount = (result, elm, type) => {
  //     result[elm[type]] = (result[elm[type]] || 0 ) + 1;
  // }
  // const countGender = (arr, type, result = {}) => {
  //     for (let i = 0; i < arr.length; i++) {
  //         doCount(result, arr[i], type);
         
  //     }
  //     return result;
  // }
  
  const reduce = (arr, callback, result = {}) => {
      for (let i = 0; i < arr.length; i++) {
          callback(i, arr[i], result)
      }
      return result;
  }
  
  const countByType = (arr, type) => {
      return reduce(arr, function(idx, value, result ) {
          result[value[type]] = (result[value[type]] || 0 ) + 1;
      })
  }
  
  
  console.log(countByType(students, "gender"));
  