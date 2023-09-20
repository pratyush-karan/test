"use client";
import React from "react";

export default function Table({ tableData }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.country}</td>
              <td>{row.player}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
