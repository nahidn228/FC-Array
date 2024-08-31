const friends = ["balam", "kalam", "salam", "halam", "galam"];
console.log(friends);

//kono element ache kina check kora
console.log(friends.includes("balam"));
console.log(friends.includes("jalam"));

// includes hocce case sensitive
if(friends.includes("Balam")){
  console.log("Party.....!!!!")
} else{
  console.log("No Party, No khaowa daowa")
}