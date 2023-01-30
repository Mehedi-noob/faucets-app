import React from "react";
import { Table } from "react-bootstrap";

const TestlinkTransectionHistory = () => {
  return (
    <div className="mt-4 text-center table" >
      <Table striped bordered hover size="sm" >
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
            <td>12:10 AM</td>
            <td>470</td>
            <td>dj84sfhuisjflskd</td>
          </tr>
          <tr>
            <td>2</td>
            <td>12:48 pm</td>
            <td>854</td>
            <td>rdfdgrtg45dfgg</td>
          </tr>
          <tr>
            <td>3</td>
            <td>12:28 pm</td>
            <td>554</td>
            <td>rdfdgddfg45fgg</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default TestlinkTransectionHistory;
