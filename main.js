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
// delete user.email
// console.log(user)
// console.log(user.check())

// console.log(user.address)
// console.log(user.address.city.first)

// console.log(user.skills[2])
// console.log(user.skills.join(""))
// console.log(user.skills.splice(""))



// lab 2 

characters = [
    {
      name: "Luke Skywalker",
      height: 177,
      gender: "male",
      mass: 77,
      eye_color: "brown",
    },
    {
      name: "Leia Organa",
      height: 160,
      gender: "female",
      mass: 56,
      eye_color: "blue",
    },
    {
      name: "Han Solo",
      height: 180,
      gender: "male",
      mass: 80,
      eye_color: "brown",
    },
    {
      name: "Chewie",
      height: 222,
      gender: "male",
      mass: 190,
      eye_color: "black",
    },
    {
      name: "kevien",
      height: 106,
      gender: "male",
      mass: 32.2,
      eye_color: "red",
    },
  ];

//   console.log(characters.find(function(character){
//     return character.eye_color == "blue"
//   }))


//   console.log(characters.find(function(character){
//     return character.mass > 50 
//   }))

//   console.log(characters.find(function(character){
//     return character.mass < 200 
//   }))

//   console.log(characters.map(function(character){
//     return character.gender == "male" 
//   })) // تعطيني اذا ميل او فيميل 


//   console.log(characters.filter(function(character) {
//     return characters.gender == 'male' ;
//   }))

  let males = characters.filter(characters => characters.gender == "male" )
  
   console.log(males)


let heights = characters.map(characters => characters.height)
   console.log(heights)



;









