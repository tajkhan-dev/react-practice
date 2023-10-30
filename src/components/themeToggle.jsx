import React, { useReducer } from "react";

function reducer(state,action){
    console.log(state.mode)

// switch(action.type){
//     case 'dark':return {mode:true};
//     case "light":return {mode:false};
// default: return state.mode
// }
if(action.type==="dark"){
    return {mode:false,btnName:"light"}
}else if(action.type==="light"){
    return {mode:true,btnName:"dark"}
}else{
    return state.mode
}

}

const ThemeToggle = () => {
const [state,setState]=useReducer(reducer,{
    mode: false,
    btnName:"light"
})

  return (
    <>
    <div className={state.mode?"bg-black text-white":"bg-white text-black"}>
        <button onClick={()=>setState({type:state.btnName})} className="border-black border-2 p-2">{state.btnName}</button>
      
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, illo doloremque quis repellendus repellat hic incidunt corporis dolor ad impedit eaque culpa ipsum error tempore enim! Magni deleniti cupiditate iste.</p>

    </div>
    </>
  );
};

export default ThemeToggle;
