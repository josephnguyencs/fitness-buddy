// import React from 'react';

// function DefaultListItem2(props) {
//   const list = props.list.list.map(item => {
//     if (item.bodyPart === 'Chest') {
//       return (
//         <div key={item.exerciseId}>
//           <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
//             <div className="card-body">
//               <table className="table table-striped">
//                 <tbody>
//                   <tr>
//                     <td className="text-center" data-toggle="collapse" href={`#${item.exerciseId}`} role="button" aria-expanded="false" aria-controls="collapseExample">{item.exercise}</td>
//                     <td className="float-right"><a className="btn btn-sm btn-success" href="#">Add</a></td>
//                   </tr>
//                   <tr className="card card-body collapse" id={item.exerciseId}>
//                     <td>{item.description}</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       );
//     }
//   });
//   /* return (
//       <div key={item.exerciseId}>
//         <div className="accordion" id="accordionExample">
//           <div className="card">
//             <div className="card-header" id="headingOne">
//               <h2 className="mb-0">
//                 <button className="btn btn-link btn-block text-center" type="button" data-toggle="collapse" data-target="#collapseOne"
//                   aria-expanded="true" aria-controls="collapseOne">
//                   {item.bodyPart}
//                 </button>
//               </h2>
//             </div>
//             <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
//               <div className="card-body">
//                 <table className="table table-striped">
//                   <tbody>
//                     <tr>
//                       <td className="text-center" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">{item.exercise}</td>
//                       <td className="float-right"><a className="btn btn-sm btn-success" href="#">Add</a></td>
//                     </tr>
//                     <tr className="card card-body collapse" id="collapseExample">
//                       <td>{item.description}</td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }); */
//   return (
//     <div>
//       <div>
//         <div className="accordion" id="accordionExample">
//           <div className="card">
//             <div className="card-header" id="headingOne">
//               <h2 className="mb-0">
//                 <button className="btn btn-link collapsed btn-block text-center" type="button" data-toggle="collapse" data-target="#collapseOne"
//                   aria-expanded="false" aria-controls="collapseOne">
//                   Chest
//                 </button>
//               </h2>
//             </div>
//             {list}
//           </div>
//           <div className="card">
//             <div className="card-header" id="headingOne">
//               <h2 className="mb-0">
//                 <button className="btn btn-link collapsed btn-block text-center" type="button" data-toggle="collapse" data-target="#collapseTwo"
//                   aria-expanded="false" aria-controls="collapseTwo">
//                   Chest
//                 </button>
//               </h2>
//             </div>
//             {list}
//           </div>
//         </div>
//       </div>
//       <div className="row justify-content-center mt-5">
//         <button className="btn btn-danger" onClick={props.list.handleCancelClick}>Return To Planner</button>
//       </div>
//     </div>
//   );
// }

// export default DefaultListItem2;
