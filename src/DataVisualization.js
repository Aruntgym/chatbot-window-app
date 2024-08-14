// // src/components/DataVisualization.js
// import React from 'react';
// import { Bar, Pie } from 'react-chartjs-2';
// import { useTable } from 'react-table';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

// const DataVisualization = ({ data }) => {
//   // Prepare data for Bar Chart
//   const barLabels = data.map(item => item.label);
//   const barValues = data.map(item => item.value);

//   const barData = {
//     labels: barLabels,
//     datasets: [
//       {
//         label: 'Values',
//         data: barValues,
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//         borderColor: 'rgba(75, 192, 192, 1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   // Prepare data for Pie Chart
//   const pieData = {
//     labels: barLabels,
//     datasets: [
//       {
//         label: 'Values',
//         data: barValues,
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(54, 162, 235, 0.2)',
//           'rgba(255, 206, 86, 0.2)',
//           'rgba(75, 192, 192, 0.2)',
//           'rgba(153, 102, 255, 0.2)',
//           'rgba(255, 159, 64, 0.2)',
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//           'rgba(153, 102, 255, 1)',
//           'rgba(255, 159, 64, 1)',
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

//   // Prepare data for Table
//   const columns = React.useMemo(
//     () => [
//       {
//         Header: 'Label',
//         accessor: 'label',
//       },
//       {
//         Header: 'Value',
//         accessor: 'value',
//       },
//     ],
//     []
//   );

//   const tableData = React.useMemo(() => data, [data]);
//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data: tableData });

//   return (
//     <div>
//       <h2>Bar Chart</h2>
//       <Bar data={barData} />

//       <h2>Pie Chart</h2>
//       <Pie data={pieData} />

//       <h2>Table</h2>
//       <table {...getTableProps()} border="1">
//         <thead>
//           {headerGroups.map(headerGroup => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map(column => (
//                 <th {...column.getHeaderProps()}>{column.render('Header')}</th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//           {rows.map(row => {
//             prepareRow(row);
//             return (
//               <tr {...row.getRowProps()}>
//                 {row.cells.map(cell => (
//                   <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
//                 ))}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DataVisualization;
