// Good Luck 💪🏾
function ZeroAndOne(num){
    return num 
    .filter(item =>item=== "Zero"|| item==="ONE")
    .map(item =>(item==="Zero"?"0":"1"))
    .join(" ");

}
 console.log(ZeroAndOne(["one","Zero","Zero","One"])) 
console.log(ZeroAndOne(["Zero", "ONE", "one", "Zero"])) 