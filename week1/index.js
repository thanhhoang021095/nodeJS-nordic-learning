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

// Count gender
function groupBy(property) {
    return students.reduce((genderObj, student) => {
    var key = student[property];
    if (!genderObj[key]) {
      genderObj[key] = [];
    }
    genderObj[key].push(student);
    return genderObj;
  }, {})
};

const genderGroup = groupBy('gender')
console.log("male:", genderGroup.male.length);
console.log("female:", genderGroup.female.length);


// Student Name
const nameList = students.map(student => student.name);
console.log(nameList);