import React from 'react'

function Table(props) {
    return (
        <table>
          <TableHeader />
          <TableBody characterData={props.characterData} removeCharacter={props.removeCharacter} />
        </table>
      );
} 
function TableHeader()  {
    return (
      <thead>
        <tr>
          <th>{JSON.parse(localStorage.getItem("user")).given_name}</th>
          <th>Job</th>
          <th>ID</th>
          <th></th>
        </tr>
      </thead>
    );
  }
  function TableBody(props) {
    const rows = props.characterData.map((row, index) => {
        //console.log(rows)
      return (
        <tr key={index}>
  <td>{row.name}</td>
  <td>{row.job}</td>
  <td>{row._id}</td>
  <td>
    <button onClick={() => props.removeCharacter(index)}>Delete</button>
  </td>
</tr>
      );
     }
    );
    return (
        <tbody>
          {rows}
         </tbody>
     );
  }
  
  export default Table;