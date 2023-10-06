'use client'

import { Component, useContext } from 'react';
import { ShipContext } from 'src/context/shipContext';

function RecursiveTable({ data }) {
  const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'GMT',
    hour12: false, // Disable 12-hour clock
  };
  
  return (
    <div>
      <table className=' w-full m-4 gap-2 ttext'>
        <thead className='px-2 justify-center w-16 bg-gray rounded h-300px'>
          <tr>
            <th className='py-4'>Vessel Name</th>
            <th>Berth Number</th>
            <th>Arrival Time</th>
            <th>Expected Departure Time</th>
            <th>Predicted Departure Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className='px-2 justify-center w-16 bg-gray shadow rounded h-300px' >
          {data.map((item) => (
            <tr key={item}>
              <td className='center font-bold'>{item.vesselName}</td>
              <td className='center font-bold'>{item.berth}</td>
              <td className='center font-bold'>{new Intl.DateTimeFormat('en-GB', options).format(new Date(item.eta))}</td>
              <td className='center font-bold'>{item.etd}</td>
              <td className='center font-bold'>{new Intl.DateTimeFormat('en-GB', options).format(new Date(item.ptd))}</td>
              <td className='center font-bold'>{item.predictedDelay}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// class RecursiveSortableTable extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: props.data,
//       sortColumn: null,
//       sortOrder: 'asc', // 'asc' or 'desc'
//     };
//   }

//   handleSort = (column) => {
//     let sortOrder = 'asc';
//     if (column === this.state.sortColumn && this.state.sortOrder === 'asc') {
//       sortOrder = 'desc';
//     }

//     const sortedData = [...this.state.data].sort((a, b) => {
//       if (a[column] < b[column]) return sortOrder === 'asc' ? -1 : 1;
//       if (a[column] > b[column]) return sortOrder === 'asc' ? 1 : -1;
//       return 0;
//     });

//     this.setState({
//       data: sortedData,
//       sortColumn: column,
//       sortOrder,
//     });
//   };

//   renderTable(data) {
//     return (
//       <table>
//         <thead>
//           <tr>
//             <th onClick={() => this.handleSort('name')}>Name</th>
//             {/* Add other headers here */}
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item) => (
//             <tr key={item}>
//               <td>{item.id}</td>
//               <td>{item.berth}</td>

//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );
//   }

//   render() {
//     const { data, sortColumn, sortOrder } = this.state;

//     return (
//       <div>
//         {sortColumn && (
//           <div>
//             <p>Sorting by: {sortColumn}</p>
//             <p>Sort order: {sortOrder}</p>
//           </div>
//         )}
//         {data.map((item) =>
//           item.children && item.children.length > 0 ? (
//             <div key={item}>
//               {this.renderTable(item.children)}
//               <RecursiveSortableTable
//                 data={item.children}
//                 sortColumn={sortColumn}
//                 sortOrder={sortOrder}
//               />
//             </div>
//           ) : null
//         )}
//       </div>
//     );
//   }
// }


const Charts = () => {

  const { ships } = useContext(ShipContext);
  if (ships) {
    return (
      <center className='icontainer'>
        <h1 className='sheader font-bold'>Ship Overview</h1>
        <RecursiveTable data={ships} />
      </center>
    );
  }

  else {
    return (
      <>
        <center className='bg ycenter'>
          <h1 className='fontcolor font-bold'>
            Please upload a file to continue.
          </h1>
        </center>
      </>
    );
  }
};

export default Charts;