function collectStrings(obj) {
  let strings = [];
  for (let item in obj) {
    if (typeof obj[item] === "string") {
      strings.push(obj[item]);
    } else if (typeof obj[item] === "object") {
      strings = strings.concat(collectStrings(obj[item]));
    }
  }
  return strings;
}
const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
