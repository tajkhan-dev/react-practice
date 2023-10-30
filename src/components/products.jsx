import React, { useContext, useEffect,} from "react";
import { myContext } from "../context/store";


const Products = () => {
  const {data,setData}=useContext(myContext)
 


useEffect(()=>{
 const fetchdata = async () => {
              const res = await fetch("https://fakestoreapi.com/products");
            const mydata = await res.json();
            setData(mydata)
            console.log(mydata)
          };
        fetchdata()
})
console.log(data)
console.log(data.filter((item)=>{
  return item.name==="Clementine Bauch"
}))

console.log(data.reduce((accumulator,item)=>{

  return accumulator+item.price

},0))

console.log(data.find((item)=>{
  return item.id===5
}))


  return (
    <>
    
      {data?.map((products) => {
        return <div>{products.title}</div>;

        
      })}
    </>
  );
};

export default Products;
