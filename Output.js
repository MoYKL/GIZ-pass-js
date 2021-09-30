const numbers = [10,10,31,19,18,21,55,23,20,10,10,78,80,99,15];
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