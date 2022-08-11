const findCount = (N, K, Arr) => 
{
  let count=0;
  for(let i=0; i<N || i<K; i++)
  {
    if(Arr[i]===K)
    {
      count+=1;
    }
  }
  return count;
};  