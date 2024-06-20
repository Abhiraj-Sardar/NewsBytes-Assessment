import React, { useState,useEffect } from 'react'

const Tree = () => {
    const [jsonData, setJsonData] = useState(null);
    const [state,setState]=useState(0);
    const getApi= async ()=>{
        try {
            const response = await fetch('http://localhost:5000/api/data');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setJsonData(data);
            if(state==0){
                setState(1);
            }  
            
            console.log(jsonData);
          } catch (error) {
            console.log('Error fetching data:', error);
          }
    }

    useEffect(() => {
        getApi();   
    },[state])
    return (
        <div>
            <h1>hello1</h1>
        </div>
    )
}

export default Tree
