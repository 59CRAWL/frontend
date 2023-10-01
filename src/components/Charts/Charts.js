'use client'

import { Component, useContext } from 'react';
import { ShipContext } from 'src/context/shipContext';

function RecursiveTable({ data }) {
  return (
    <table className=' w-full m-4 gap-2'>
      <thead className='px-2 justify-center w-16 bg-gray-700 rounded h-300px'>
        <tr>
          <th className='py-4'>Ship ID</th>
          <th>Berth Number</th>
          <th>ETA</th>
          <th>ETD</th>
          <th>Status</th>
          <th>Weather (0=dry, 1=wet)</th>
        </tr>
      </thead>
      <tbody className='px-2 justify-center w-16 bg-gray-700 shadow rounded h-300px'>
        {data.map((item) => (
          <tr key={item}>
            <td className='center font-bold'>{item.id}</td>
            <td className='center font-bold'>{item.berth}</td>
            <td className='center font-bold'>{item.eta}</td>
            <td className='center font-bold'>{item.etd}</td>
            <td className='center font-bold'>{item.predictedDelay}</td>
            <td className='center font-bold'>{item.weather}</td>
          </tr>
        ))}
      </tbody>
    </table>
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

  const { message } = useContext(ShipContext);
  if (message){
      return (
      <div>
        <h1 className='px-4 font-bold'>Ship Overview</h1>
          <RecursiveTable data={message} />
      </div>
    );
  }
  
  else {
    return (
      <>
        <section className='bg'>
          <h1 className='rcenter font-bold'>
            Upload file to see schedules
          </h1>
        </section>
      </>
    );
  }
};

export default Charts;