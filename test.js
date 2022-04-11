/*
Map Transformers
Using map, return an array of each transformer's value of its 'form' property 
*/
//result: ['Freightliner Truck','Gun', 'VW Beetle','Walkman']
const transformersMap = () => {
    let transformers = [
        {
          name: 'Optimus Prime',
          form: 'Freightliner Truck',
          team: 'Autobot'
        },
        {
          name: 'Megatron',
          form: 'Gun',
          team: 'Decepticon'
        },
        {
          name: 'Bumblebee',
          form: 'VW Beetle',
          team: 'Autobot'
        },
        {
          name: 'Soundwave',
          form: 'Walkman',
          team: 'Decepticon'
        }
      ];
      const forms = transformers.map((transformer) => transformer.form)
      return forms;
}
console.log("Map: ", transformersMap())


/*
Filter Transformers
Using filter, return an array of transformer objects that have the 'team' property of 'Autobot'

result: [ {
          name: 'Optimus Prime',
          form: 'Freightliner Truck',
          team: 'Autobot'
        },
         {
          name: 'Bumblebee',
          form: 'VW Beetle',
          team: 'Autobot'
        }
    ]
*/
const transformersFilter = () => {
    let transformers = [
        {
          name: 'Optimus Prime',
          form: 'Freightliner Truck',
          team: 'Autobot'
        },
        {
          name: 'Megatron',
          form: 'Gun',
          team: 'Decepticon'
        },
        {
          name: 'Bumblebee',
          form: 'VW Beetle',
          team: 'Autobot'
        },
        {
          name: 'Soundwave',
          form: 'Walkman',
          team: 'Decepticon'
        }
      ]
    const teams = transformers.filter((transformer) => transformer.team === 'Autobot')
    return teams;
}
console.log("Filter: ", transformersFilter())

/*
Reduce Transformers
Using reduce, return an object that has a count for each team of transformer
result: {
    Autobot: 2,
    Decepticon: 2
}
*/
const reduceTransformers = () => {
    let transformers = [
        {
          name: 'Optimus Prime',
          form: 'Freightliner Truck',
          team: 'Autobot'
        },
        {
          name: 'Megatron',
          form: 'Gun',
          team: 'Decepticon'
        },
        {
          name: 'Bumblebee',
          form: 'VW Beetle',
          team: 'Autobot'
        },
        {
          name: 'Soundwave',
          form: 'Walkman',
          team: 'Decepticon'
        }
      ]
      const val = transformers.reduce((acc, cur) => {
        return acc + cur.team;
     }, 0)
    return val;
}
console.log("Reduce: ", reduceTransformers()) 



/*

Sum of every positive element
If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.
Use filter and reduce
*/

//result: 42
const sumPositiveElement = () => {
    const input = [1, -4, 12, 0, -3, 29, -150]

   var sum = 0;
   for(var i =0; i < input.length; i++){
    if(input[i] > 0){
      sum += input[i]
    } 
   }
    return sum;
}
console.log("SumOfPositiveEle: ", sumPositiveElement())



/* 
Calculate median 
Calculate the mean and median values of the number elements from the input array.

Use: reduce, sort, Math.abs
*/
//result: { mean: 38.5, median: 32 }
const meanM = () => {
    const input = [12, 46, 32, 64]

  let mean = 0;
  for (let i = 0; i < input.length; i++){
    mean += input[i]
  }
  return mean/input.length
}
console.log("mean: ", meanM())

///*  Median       *\\\\\
const medianM = () => {
  const num = [12, 46, 32, 64]

  let mid = Math.abs(num.length/2),
  median = [...num].sort((a, b)=> a - b);
  return num.length % 2 !== 0 ? median[mid] : (median[mid - 1] + median[mid]/2)

}
console.log("median: ", medianM())

/*
Get name initials
The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.
Use .map , .split , .join
*/
//result: 'GRRM'
const nameInitials = () => {
    const input = 'George Raymond Richard Martin';

      var init = input.split(' ')
      var initials = ''
      for(var i = 0; i < init.length; i++) {
        if (init[i].length > 0 && init[i] !== ''){
          initials += init[i][0]
        }
      }
      return initials
}
console.log("Initials: ", nameInitials())

/*
Age difference from the youngest and oldest
Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.
Use .map , Math.min , Math.max
*/

//Result: [13, 67, 54]
const ageDifference = () => {
    const input = [
        {
          name: 'John',
          age: 13
        },
        {
          name: 'Mark',
          age: 56,
        },
        {
          name: 'Rachel',
          age: 45,
        },
        {
          name: 'Nate',
          age: 67,
        },
        {
          name: 'Jeniffer',
          age: 65,
        }
      ];
      
  
    let agesDiff = input.map((ages)=>{
      let youngest = Math.min(ages.age)
      let oldest = Math.max(ages.age)
      let diff = oldest - youngest
      let members = [youngest, oldest, diff] 
      return members

    })
   return agesDiff
}
console.log("Age Difference: ", ageDifference())

