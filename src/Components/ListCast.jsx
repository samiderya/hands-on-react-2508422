import {useState,useEffect  } from "react";

export default ({onChoice}) => {
  const [cast,setCast] = useState([]);
  async function fetchCast(){
    const resp = await fetch('cast.json');
    setCast(await resp.json());
  }
  useEffect(()=>{
    fetchCast();
  });
  return (
    <div style={{
      display:"-ms-inline-grid",
      gridAutoColumns:'repeat(auto-fit,minmax(10px,1fr))',
      gap:"1rem",
      marginBottom:"1rem",
     

    }}>
      {
        
        cast.map(member => (
          <a onClick={()=>{onChoice(member)}} key={member.id} data-tooltip={member.name} >
          <img style={{width:'200px'}} src={`images/${member.slug}_tn.svg`} alt={member.name} />
          </a>
        ))
      }
    </div>
  )
 
}