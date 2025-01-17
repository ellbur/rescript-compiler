type user =
  | User({
      @as("renamed")
      name: string,
      age: int,
    })

let user = User({name: "Corentin", age: 35})

let getName = t =>
  switch t {
  | User({name}) => name
  }

let getAge = t => 
  switch t {
  | User({age}) => age
  }
