const object = {
    name: ["matt"],
    friends: {
        names: ['Dave', 'Laurie', 'Henry'],
        pets: {
            dogs: ['Bear'],
            lizards: ["Speck", "Fleck"]
        }
    }
}

//get all values from object

const { name, friends: { names, pets: { dogs, lizards } }} = object

//console.log(name, names, dogs, lizards)


let options = {
    size: {
      width: 100,
      height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
  };


const { size: { width, height }, items: [cake, donut], extra} = options

console.log(width, height, cake, donut, extra)

//write a function to return the top salary

let user = { name: "John", years: 30 };

const { name: firstName, years: age} = user

//console.log(firstName, age)

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  // Create the function topSalary(salaries) that returns the name of the top-paid person.

  const topPaid = (object) => {
    let highSalary = 0
    let highestPaid = ''

    for( let [name, salary] of Object.entries(object) ) {
        if(salary > highSalary) {
            console.log(salary, name)
            highSalary = salary
            highestPaid = name
        }
    }
    return highestPaid
  }

  console.log(topPaid(salaries))