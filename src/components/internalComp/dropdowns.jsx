import React , {useState} from "react";
import "../../styles/internal-styles/dropdown.css"; 



function Dropdown(props){

    const [listItems, setlistItems] = useState([]);
    const [selected, setselected] = useState(false); 
    
    function handleClick(){
        setlistItems(props.options);
    }
     
   function handleChange(){
       setselected(true);
   }




    return <div className="dropdown-div">
    <select name="dropdown-select" onChange={handleChange} className={selected?"selected" : "dropdown-select" }style={{width: props.width }} onClick={handleClick} id={props.id}>
        <option className="type-tag">{props.dropdownName} ˅</option>

       {listItems.map(e=>{
            return <option value="love">{e}</option>
        })}

    </select>
    </div>;
}


export default Dropdown; 