const person = {
  name: "John",
  address: {
    cityInfo: "Mumbai",
  },
};

// ---------- shallow copy ----------
// approach-1
const person2 = { ...person };

// approach-2
const person3 = Object.assign({}, person);

// ---------- deep copy ----------
// approach-1
const person4 = JSON.parse(JSON.stringify(person));

// approach-2 (Always explain this approach)
function objectDeepCopy(obj) {
  let newObj = {};
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      newObj[key] = objectDeepCopy(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
