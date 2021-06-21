import React, {useState, useEffect} from "react";
import '../styles/progressbar.css';
import Progresselement from "./internalComp/progresschart-element";
import Axios from "axios";




function ProgressBar({userid}){
  

    const [theoryProgress, setTheoryProgress] = useState(); 
    const [practicalProgress, setPracticalProgress] = useState(); 

    useEffect(()=>{ 
        

                fetch('http://localhost:3002/getprogress', {
                        method: 'POST', 
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({useridValue: userid})
                    })
                    .then(backData => backData.json())
                    .then(result=> {
                        setTheoryProgress(result.theory); 
                        setPracticalProgress(result.practical); 
                    }) 
                    
      }, [])
    
   


    return <div className="progress-bar">
        <div className="centering-div">
            <Progresselement theoryOrPrac="Theory" value={theoryProgress}/>
            <Progresselement theoryOrPrac="Practical" value={practicalProgress} />
        </div>
    </div>
}

export default ProgressBar; 







    // // useEffect( () => {
    // //     fetch('http://localhost:3002/getprogress', {
    // //             method: 'POST', 
    // //             headers: {
    // //                 'Content-Type': 'application/json'
    // //             },
    // //             body: JSON.stringify({useridValue: userid})
    // //         })
    // //         .then(backData => {
    // //             setData(backData);
    // //         })
    // //     }, [])
    
    // const [theoryProgress, setTheoryProgress] = useState(); 
    // const [practicalProgress, setPracticalProgress] = useState(); 


    // // Axios({ 
    // //     method: 'post', 
    // //     url: 'http://localhost:3002/getprogress', 
    // //     data: { useridVal: userid } 
    // //     }).then(response => {
    // //         console.log(response.data);
    // //         setTheoryProgress(response.theory);
    // //         setPracticalProgress(response.practical);
            
    // //     });

 
    //  const fetchData = async () => { return fetch ('http://localhost:3000/getprogress', {
    //         method: 'POST', 
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: userid
    //     }).then(progressNumbers => progressNumbers.json())
          
    // }
    //     fetchData(); 
    

        
      
    //     function setData(progressNumbers){
            
    //         setTheoryProgress(progressNumbers.theory);
    //         setPracticalProgress(progressNumbers.practical);
           
    //     } 
