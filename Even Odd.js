const findEvenOdd = (N, Arr) => 
{
  let b=[],count1=0, count2=0;
  for(let i=0; i<N; i++)
  {
    if(Arr[i] % 2 === 0)
    {
      count1+=Arr[i]
    }
    else
    {
      count2+=Arr[i]
    }
  }
  b[0]=count1;
  b[1]=count2;
  return b;
};
 