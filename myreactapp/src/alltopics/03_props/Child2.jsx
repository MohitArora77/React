const Child2 =(x) =>{
    console.log(x);
     // {propData : {data1:"Hello Child",data2:[]}}

     return (
        <div>
            <p>Child2 :{x.propData.data1}</p>
            <p>Numbers : {x.propData.data2}</p>
        </div>

     )
    


    }
export default Child2