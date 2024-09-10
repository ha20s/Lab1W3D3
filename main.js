let user = {
    name : "Hasna",
    lname : "Alsaqer", 
    id : 24 ,
    email: "hassna@ha.com",
    availability : false, 
    address : {
        first : "Dhahran", 
        second : "Riyadh", 
        third : "Daammam" ,
        city : {
            first : "Doha", 
            second : "Dana", 
        } ,
    } ,  
      check : function() {
        return this.availability = true;
      } ,
   
    skills : ["comuniccation" , "Adaptive" , "Time Mangment"]
}

// console.log(user)
// console.log(user.name)
// user.id = 25
// console.log(user.age)
delete user.email
// console.log(user)
// console.log(user.check())

// console.log(user.address)
// console.log(user.address.city.first)

// console.log(user.skills[2])
console.log(user.skills.splice(""))





