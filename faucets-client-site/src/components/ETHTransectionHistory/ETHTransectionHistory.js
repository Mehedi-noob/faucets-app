import React from "react";
import { Table } from "react-bootstrap";

const ETHTransectionHistory = () => {
  return (
    <div className="mt-4 text-center table" >
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th className="px-4">Sr</th>
            <th>Time</th>
            <th>Amount</th>
            <th>Hase</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>8:30 AM</td>
            <td>741</td>
            <td>4gfdg5fsd4f5f1f</td>
          </tr>
          <tr>
            <td>2</td>
            <td>9:45 AM</td>
            <td>954</td>
            <td>df45fdsf1451gfdf4d</td>
          </tr>
          <tr>
            <td>3</td>
            <td>9:25 PM</td>
            <td>654</td>
            <td>df45fdsds48f1451gfdf4d</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ETHTransectionHistory;
