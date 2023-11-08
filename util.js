// funcion que compara dos arrays y devuelve otro que no contenga los elementos del primero

const arr1 = [
  { _id: 1 },
  { _id: 3 },
  { _id: 5 },
  { _id: 7 },
  { _id: 9 },
  { _id: 11 },
];

const arr2 = [
  { _id: 1 },
  { _id: 3 },
  { _id: 5 },
  { _id: 7 },
  { _id: 9 },
  { _id: 11 },
  { _id: 2 },
  { _id: 4 },
  { _id: 6 },
  { _id: 8 },
  { _id: 10 },
  { _id: 12 },
];

const filterArrNotContain = (arrToFilter, notContain) => {
  return arrToFilter.filter((obj) => {
    let condition = true;
    notContain.forEach((eachObj) => {
      if (eachObj._id === obj._id) {
        condition = false;
      }
    });
    return condition
  });
};

// const filterdArray = filterArrNotContain(arr2, arr1);
// module.exports = filterArrNotContain
// console.log(filterdArray);