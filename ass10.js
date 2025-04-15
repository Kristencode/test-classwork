// Create an adashe...Add member, get members amount, withdraw name amount,remove member

let allMembers = [
  {
    name: "Kristen",
    age: 27,
    amount: 100,
  },
];
let total =0

// add new members

function addNew(name, amount, age) {
  let newMember = {
    name: name,
    age: age,
    amount: amount,
  };

    allMembers.push(newMember);

}

addNew("Joy", 25, 100);
console.log(allMembers)

// update member info

function updateInfo(name, amount, age) {
  for (i = 0; i < allMembers.length; i++) {
    if (allMembers[i].name === name) {
      allMembers[i].amount = amount;
      allMembers[i].age = age;
      break;
    } 
  }
  console.log(allMembers);
}

updateInfo("Joy", 200, 12);

// delete members

function Delete(name){
  for(let i =0; i < allMembers.length; i++){
    if(allMembers[i].name === name){
      allMembers.splice(i,1);
      console.log(allMembers)
    }
  }
}

Delete('Joy')

// to add all amount

function getTotalAmount() {
  let total = 0;

  for (let i = 0; i < allMembers.length; i++) {
    total += allMembers[i].amount;
  }

  console.log("Total amount:", total);
 
}

getTotalAmount()