import React, { useState, useEffect } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { useTable } from "react-table";
import "chart.js/auto";

const App = () => {
  const [sampleData, setSampleData] = useState("");
  const [show, setShow] = useState(false);
  const [data, setData] = useState({
    barChartData: {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
        {
          label: "Sales",
          data: [10, 20, 30, 40, 50],
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    },
    pieChartData: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    tableData: [
      { name: "John Doe", age: 28, city: "New York" },
      { name: "Jane Doe", age: 22, city: "Los Angeles" },
      { name: "Sam Smith", age: 35, city: "Chicago" },
    ],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const parsedData = JSON.parse(sampleData);
      if (
        parsedData.barChartData &&
        parsedData.pieChartData &&
        parsedData.tableData
      ) {
        setData(parsedData);
        setShow(true);
      } else {
        alert(
          "Invalid JSON format. Please ensure it contains barChartData, pieChartData, and tableData."
        );
      }
    } catch (error) {
      alert("Invalid JSON input. Please check the format.");
    }
  };

  const columns = React.useMemo(() => {
    if (data.tableData.length === 0) return [];
    const keys = Object.keys(data.tableData[0]);
    return keys.map((key) => ({
      Header: key.charAt(0).toUpperCase() + key.slice(1),
      accessor: key,
    }));
  }, [data.tableData]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data: data.tableData,
    });

  // useEffect(() => {
  //   const fetchData = () => {
  //     setTimeout(() => {
  //       const newData = [
  //         {
  //           barChartData: {
  //             labels: ["June", "July", "August", "September", "October"],
  //             datasets: [
  //               {
  //                 label: "Revenue",
  //                 data: [15, 25, 35, 45, 55],
  //                 backgroundColor: "rgba(153, 102, 255, 0.2)",
  //                 borderColor: "rgba(153, 102, 255, 1)",
  //                 borderWidth: 1,
  //               },
  //             ],
  //           },
  //           pieChartData: {
  //             labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
  //             datasets: [
  //               {
  //                 data: [10, 20, 30, 15, 25],
  //                 backgroundColor: [
  //                   "rgba(255, 99, 132, 0.2)",
  //                   "rgba(54, 162, 235, 0.2)",
  //                   "rgba(255, 206, 86, 0.2)",
  //                   "rgba(75, 192, 192, 0.2)",
  //                   "rgba(153, 102, 255, 0.2)",
  //                 ],
  //                 borderColor: [
  //                   "rgba(255, 99, 132, 1)",
  //                   "rgba(54, 162, 235, 1)",
  //                   "rgba(255, 206, 86, 1)",
  //                   "rgba(75, 192, 192, 1)",
  //                   "rgba(153, 102, 255, 1)",
  //                 ],
  //                 borderWidth: 1,
  //               },
  //             ],
  //           },
  //           tableData: [
  //             {
  //               name: "Alice Johnson",
  //               age: 30,
  //               city: "Houston",
  //               occupation: "Engineer",
  //             },
  //             {
  //               name: "Bob Brown",
  //               age: 26,
  //               city: "Phoenix",
  //               occupation: "Designer",
  //             },
  //             {
  //               name: "Carol White",
  //               age: 41,
  //               city: "Philadelphia",
  //               occupation: "Teacher",
  //             },
  //           ],
  //         },
  //       ];

  //       let index = 0;
  //       const interval = setInterval(() => {
  //         setData(newData[index]);
  //         index = (index + 1) % newData.length;
  //       }, 4000);

  //       return () => clearInterval(interval);
  //     }, 1000);
  //   };

  //   fetchData();
  // }, []);
  useEffect(() => {
    let index = 0; // Initialize the index for cycling through the data
    const fetchData = () => {
      const newData = [
        {
          barChartData: {
            labels: ["June", "July", "August", "September", "October"],
            datasets: [
              {
                label: "Revenue",
                data: [15, 25, 35, 45, 55],
                backgroundColor: "rgba(153, 102, 255, 0.2)",
                borderColor: "rgba(153, 102, 255, 1)",
                borderWidth: 1,
              },
            ],
          },
          pieChartData: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
            datasets: [
              {
                data: [10, 20, 30, 15, 25],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                ],
                borderWidth: 1,
              },
            ],
          },
          tableData: [
            {
              name: "Alice Johnson",
              age: 30,
              city: "Houston",
              occupation: "Engineer",
            },
            {
              name: "Bob Brown",
              age: 26,
              city: "Phoenix",
              occupation: "Designer",
            },
            {
              name: "Carol White",
              age: 41,
              city: "Philadelphia",
              occupation: "Teacher",
            },
          ],
        },
        // Add more objects as needed for the interval cycling
      ];
  
      // Update state based on the current index
      setData(newData[index]);
  
      // Update the index to cycle through the data
      index = (index + 1) % newData.length;
    };
  
    // Set up the interval
    const intervalId = setInterval(fetchData, 4000); // 4 seconds interval
  
    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run once on mount
  

  return (
    <div>
      <h1>Dynamic Charts and Table</h1>
      {/* <p>{sampleData}</p> */}

      <div style={{ width: "50%", margin: "auto" }}>
        <h2>Bar Chart</h2>
        <Bar data={data.barChartData} />
      </div>

      <div style={{ width: "50%", margin: "auto" }}>
        <h2>Pie Chart</h2>
        <Pie data={data.pieChartData} />
      </div>

      <div style={{ width: "50%", margin: "auto" }}>
        <h2>Table</h2>
        <table
          {...getTableProps()}
          style={{ width: "100%", borderCollapse: "collapse" }}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    style={{ border: "1px solid black", padding: "10px" }}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      style={{ border: "1px solid black", padding: "10px" }}
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div
        style={{ width: "50%", height: "50%", margin: "auto", padding: "50px" }}
      >
        <form onSubmit={handleSubmit}>
          <label>
            User Data Entry:
            <textarea
              style={{
                width: "100%",
                height: "150px",
                margin: "auto",
                padding: "10px",
              }}
              value={sampleData}
              onChange={(e) => setSampleData(e.target.value)}
              placeholder="Enter your JSON code"
            />
          </label>
          <button
            type="submit"
            style={{ width: "auto", margin: "auto", justifyContent: "center" }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;

// src/App.js
// src/App.js
// src/App.js
// import React from 'react';
// import DataVisualization from './DataVisualization';

// const jsonData = [
//   { label: 'January', value: 65 },
//   { label: 'February', value: 59 },
//   { label: 'March', value: 80 },
//   { label: 'April', value: 81 },
//   { label: 'May', value: 56 },
//   { label: 'June', value: 55 },
//   { label: 'July', value: 40 },
// ];

// function App() {
//   return (
//     <div className="App">
//       <h1>Data Visualization</h1>
//       <DataVisualization data={jsonData} />
//     </div>
//   );
// }

// export default App;
