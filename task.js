
const numbers = [5,8,0,1,9,11,15,16];
let temp,i,j;

console.log("Original numbers list: ", numbers)

for(let i = 0 ; i < numbers.length ; i++)
{
    for(let j = 0 ; j < i ; j++)
    {
        if(numbers[i] < numbers[j])
        {
            let temp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temp;
        }
    }
}

console.log("Numbers list After sorting: ", numbers)

for(let i = 0 ; i < numbers.length ; i++)
{
    for(let j = 0 ; j < numbers.length ; j++)
    {
        if(numbers[i] > numbers[j])
        {
            let temp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temp;
        }
    }
}

console.log("Numbers list After Desc sorting: ", numbers)
