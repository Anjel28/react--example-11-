import {useState} from 'react';



/*interface IState{
    name: String,
    title: string,
}*/


let FunComp: React.FC = () => {
   // const [count, setCount] = useState<IState>({
     //   name: "Anjel",
       // age: 26,
    //})
   /* const [state, setState]= useState<IState>({
     
        name: "Techinfo",
        title: "Mern-stack"
    });*/
    return(
        <>
       <h1 className="bg-success p-1 text-white text-centre">
        Functinal Components
       </h1>
       <div className="brother px-4 bg-light mb-4" >
        <h3>
           
        </h3>

       </div>
      
       <div className="col-md-4 card p-2">
        <h1>value from count</h1>
       
        {/*<h1>value from state</h1>
        <h4>Name: {state.name}</h4>
        <h4>Title: {state.title}</h4>*/}
       </div>
        </>
    )
}

export default FunComp;