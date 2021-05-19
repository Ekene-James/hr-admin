import React from 'react';
import {Link} from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import TRows from './TRows';
import LabelBar from '../labelBar/LabelBar';





function ETable({header,btnTxt,rows,onShow,onDelete,onEdit,...rest}) {
  
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [status, setStatus] = React.useState('');

    const handleChange = (event) => {
        setStatus(event.target.value);
    };
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };
     
  return (
    <>
    <LabelBar text={header}/>
    <TableContainer component={Paper} {...rest}>
      <Table aria-label="collapsible table" size='small'>
        <TableHead>
          <TableRow>
           
            <TableCell>ID.</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Employment Type</TableCell>
            <TableCell align="center">Actions</TableCell>
            
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.data?.map((row,ind) => (
            <TRows key={ind} row={row} ind={ind} onDelete={onDelete} onShow={onShow} onEdit={onEdit}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows?.items?.length || 10}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />

    </>
  );
}
export default ETable