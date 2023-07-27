import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ReactNode } from 'react';

function createData(
  id: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { id, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
export default function Page() {
  return <BasicTable rows={rows} schema={[{ data_name: "id", display_name: "Id" }, { data_name: "calories" }, { data_name: "fat", display_name: "Fat" }, { data_name: "carbs", display_name: "Carbs" }, { data_name: "protein", display_name: "Protein" }]} />
}
export function BasicTable<T extends { id: string, [x: string]: ReactNode }>(props: { rows: T[], schema: { display_name?: string, data_name: (keyof T & string) }[] }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {props.schema.map((col) => (
              <TableCell
                key={col.data_name}
              >{col.display_name ?? col.data_name}</TableCell>))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {props.schema.map((col) => (
                <TableCell
                  key={row.id + col.data_name}
                >{row[col.data_name]}</TableCell>))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

type x = { matthew: 5, randy: string, jenna: boolean }
type y = keyof x


// expands object types one level deep
type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;

// expands object types recursively
type ExpandRecursively<T> = T extends object
  ? T extends infer O ? { [K in keyof O]: ExpandRecursively<O[K]> } : never
  : T;

type z = Expand<y> 