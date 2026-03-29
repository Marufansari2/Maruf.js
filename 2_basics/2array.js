
const marvel_heros=["Ironman","Thor","Hulk","Captain America","Black Widow"]
const dc_heros=["Superman","Batman","Wonder"]

   // marvel_heros.push(dc_heros) // push is used to add an element at the end of the array, it modifies the original array and returns the new length of the array

  //  console.log(marvel_heros);
   // console.log(marvel_heros[3][1]);

 //  marvel_heros.concat(dc_heros) // concat is used to merge two or more arrays, it does not modify the original array and returns a new array
 // const allheros= marvel_heros.concat(dc_heros)
  // console.log(allheros);

    const all_new_heros=[...marvel_heros,...dc_heros] // this is another way to merge two or more arrays, it is called the spread operator, it does not modify the original array and returns a new array
    console.log(all_new_heros);
    
    const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
    const real_another_array=another_array.flat(Infinity) // flat is used to flatten an array, it takes an optional depth argument, if the depth is not provided, it flattens the array to a depth of 1, if the depth is Infinity, it flattens the array completely
    console.log(real_another_array);

    console.log(Array.isArray("Maruf")); // isArray is used to check if a variable is an array, it returns true if the variable is an array and false if it is not an array
    console.log(Array.from("Maruf"));
    
    console.log(Array.from({name: "Maruf"})); // Array.from is used to create an array from an array-like or iterable object, it takes an array-like or iterable object as an argument and returns a new array, in this case, it creates an array from the object {name: "Maruf"}, it returns an array with one element which is the object itself
    
    let score1=100
    let score2=200
    let score3=300

    console.log(Array.of(score1, score2, score3));
    