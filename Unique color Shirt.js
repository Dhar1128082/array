function Unique_Shirts (arr,N) {
    let unique_color=arr.filter((value)=>arr.indexOf(value)===arr.lastIndexOf(value));
          return (unique_color.length)
    }
    