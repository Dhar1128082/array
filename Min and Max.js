function arrayMin(arr) {
    let i=0;
   let min=arr[i]
 for( i=0; i<arr.length; i++)
 {
   if(min>arr[i+1])
   {
     min=arr[i+1]
   }
 }
   return min;
 }
 
 function arrayMax(arr) {
   let j=0
   let max=arr[0]
   for(j=0; j<arr.length; j++)
   {
     if(max<arr[j+1])
     {
       max=arr[j+1]
     }
   }
   return max
 }