import React from 'react';
import BotonPar from './BotonPar';
import BotonImpar from './BotonImpar';

export default function TableBody() {
  const data = [
    { name: "Jaime", lastname: "Caicedo" },
    { name: "Pedro", lastname: "Pérez" },
    { name: "Jose", lastname: "Perales" },
    { name: "Hector", lastname: "Abadía" }
  ];

  return (
    <tbody>
      {data.map((item, index) => ( index%2 === 0 ? 
        <tr>
          <td>{item.name}</td>
          <td>{item.lastname}</td>
          <td><BotonPar/></td>
        </tr>
        :
        <tr>
          <td>{item.name}</td>
          <td>{item.lastname}</td>
          <td><BotonImpar/></td>
        </tr>
      ))}
    </tbody>
  );
}