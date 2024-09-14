import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge';

const PreviousBookings = () => {
  return (
    <div>
      <Table>
        <TableCaption>List of your Previous bookings</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Service</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className=" text-right">rating</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 2].map((item, index) => (
            <TableRow key={index}>
              <TableCell>09-11-2024</TableCell>
              <TableCell>Electritians</TableCell>
              <TableCell>Elects.com</TableCell>
              <TableCell className='text-right'><Badge>good</Badge></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default PreviousBookings