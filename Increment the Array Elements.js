const Inc_Arr = (array,N) => 
{
  let result="";
  for(let i=0; i<N; i++)
  {
    result+=(array[i]+1) + " ";
  }
  console.log(result)
};