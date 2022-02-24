import React  from 'react';
// import {useEffect} from 'react';
// import {useFetchJsonDataQuery} from '../../store/api-reducer';
// import JsonData from '../../example.json';


function DataManager() {
    // const [pullJsonData, setPullJsonData] = useState(undefined);
    // const displayData = Object.keys(JsonData).map(
    //     (info: any, i: any) => {
    //         return 
    //         <>
    //             <tr>
    //                 <td>{info.type}</td>
    //                 <td>{info.name}</td>
    //             </tr>
    //         </>
    //     }
    // )
 
    return (
        <>
            <table className = "table table-striped">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Size</th>
                    </tr>
                </thead>
                <tbody>
                 
                    
                    {/* {displayData} */}
                    
                </tbody>
            </table>
             
        </>
    )
 }
 
 export default DataManager;

// function DataManager() {
//     const {data: fetchJsonData, isSuccess: isSuccessFetchJsonData} = useFetchJsonDataQuery(undefined);
//     // const data = Object.assign({}, JsonData[0]);
//     // console.log(data);

//     // const displayData = Object.assign({}, JsonData[0]);

//     useEffect(() => {
//         if (isSuccessFetchJsonData && fetchJsonData) {
//             console.log('777777777');
//             // console.log(fetchJsonData);
//         }
//     }, [fetchJsonData, isSuccessFetchJsonData]);
    
//     console.log('888888888888');
//     // console.log(displayData);

//     return (
//         <>
//           <table>
//               <td></td>
//               <td></td>
//           </table>
//         </>
//     )
//     // const data = Object.entries(JsonData)[0];
//     // const data = Object.entries(JsonData)[0];
//     // const bil = data[1].contents;
//     // console.log(data);
//     // if (data) {
//     // }


//     // console.log(JsonData[0].contents[0].contents);
//     // console.log(JsonData[0].contents[0].contents);

// }

// export default DataManager;
