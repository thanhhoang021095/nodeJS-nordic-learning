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

// ================= prototype.reduce ===========================
// Count gender
// function groupBy(property) {
//     return students.reduce((genderObj, student) => {
//     var key = student[property];
//     if (!genderObj[key]) {
//       genderObj[key] = [];
//     }
//     genderObj[key].push(student);
//     return genderObj;
//   }, {})
// };

// const genderGroup = groupBy('gender')
// console.log("male:", genderGroup.male.length);
// console.log("female:", genderGroup.female.length);

// ================= for-loop ===========================
// fix

// const doCount = (elm, result, type) => {};

const reduce = (arr, callback, result = {}) => {
  for (let i = 0; i < arr.length; i++) {
    result = callback(i, arr[i], result);
  }
  return result;
};

const countByType = (type) => {
  return reduce(students, function (idx, value, result) {
    const count = result[value[type]];
    result[value[type]] = (count || 0) + 1;
    return result;
  });
};
// const callback = (idx, value, result = {}, arr) => {
//   const countByType = result[elm[type]];
//   result[elm[type]] = (countByType || 0) + 1;
//   return result;
// };
console.log("for loop",countByType("gender"));

// ================= for-loop ===========================
const countByRecuresive = (arr, type, result = {}, idx = 0) => {
  if (idx > arr.length -1) {
    return result;
  }
  const elm = arr[idx];
  const count = result[elm[type]];
  result[elm[type]] = (count || 0) + 1;
  return result;

  countByRecuresive(arr, type, result, idx + 1);
}

console.log("recursive",countByRecuresive(students, "gender"));

// Student Name
const nameList = students.map((student) => student.name);
console.log(nameList);
