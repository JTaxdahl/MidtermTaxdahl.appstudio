animals = ["dog","cat","horse","meerkat"]

newAnimal = prompt("Enter an animal to add to an array")
lastAnimal = newAnimal.toLowerCase()

animals.push(lastAnimal)
alert(`The last animal is ${animals[animals.length - 1]}`)