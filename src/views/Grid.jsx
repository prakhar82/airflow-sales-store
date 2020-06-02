import React, { Component , useState , useEffect , useCallback} from 'react';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


import {myJson} from '../views/csv/jsonData'
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';

import {MuiPickersUtilsProvider,KeyboardDatePicker} from '@material-ui/pickers';
import DateFnsUtils from "@date-io/date-fns";


function GridView(props) {


    const[coulumnDefs,setColumnDefs] = useState([{
        headerName: "Store ID", field: "STORE_ID",sortable: true, filter: true , editable : true, checkboxSelection: true, headerCheckboxSelection: true
      }, {
        headerName: "Store Country", field: "STORE_COUNTRY",sortable: true, filter: true ,  editable : true
      }, {
        headerName: "Store Location", field: "STORE_LOCATION",sortable: true, filter: true ,  editable : true
      }, {
        headerName: "Product Category", field: "PRODUCT_CATEGORY",sortable: true, filter: true ,  editable : true
      }, {
        headerName: "Product Id", field: "PRODUCT_ID",sortable: true, filter: true ,  editable : true
      }, {
        headerName: "Selling Price", field: "SP",sortable: true, filter: true ,  editable : true
      }, {
        headerName: "Cost Price", field: "CP",sortable: true, filter: true ,  editable : true
      }, {
        headerName: "Discount", field: "DISCOUNT",sortable: true, filter: true ,  editable : true
      }, {
        headerName: "Date", field: "Date",sortable: true, filter: true ,  editable : true
      }]);

    const[rowData,setRowData] = useState(null)
    const[dateSelected,setDateSelected] =  useState(new Date()) 
    const [gridApi, setGridApi] = useState();

    const onGridReady = useCallback(
        (params) => {
          const { api, columnApi } = params;
          setGridApi({ api, columnApi });
        },
        []
      );
  
  
  
useEffect(() => 
  {
      setRowData(myJson);
    /* this.setState(
      {
        rowData : myJson
      }
    ) */
   
   
    //   console.log(json);
    //   fetch('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/rowData.json')
    //   .then(result => result.json())
    //   .then(rowData => this.setState({rowData}))
}, []);

  const handleDateChange = (dateSelected) => {
   /*  this.setState({selectedDate : date}); */
   setDateSelected(dateSelected);
  };


    return (
      <div style={{ width: '96%' , marginTop : "1%" , marginLeft:"2%" }}>
        <Grid container spacing={1}>
          
            
            <Grid item xs = {9}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker"
          size="small"
          value={dateSelected}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </MuiPickersUtilsProvider>

          </Grid>
          <Grid item xs={2}>
      <Button
        variant="contained"
        color="primary"
        //className={classes.button}
       startIcon={<CloudUploadIcon />}
      >Add Records
      </Button>
        </Grid>
      
        <Grid item xs={1}>
      <Button
        variant="contained"
        color="primary"
        //className={classes.button}
       startIcon={<SaveIcon />}
      >Send
      </Button>
        </Grid>
      </Grid>
        <Grid item xs={12}>
      <div
        className="ag-theme-alpine"
        style={{
        /* marginLeft : '30px', */
        marginTop: '10px',
        height: '540px',
       }}
      >
        <AgGridReact
         // 
         
          onGridReady={ onGridReady}
          columnDefs={coulumnDefs}
         // paginationAutoPageSize={true}
          pagination={true}
          rowSelection={"multiple"}
          rowData={rowData}
          paginationPageSize={20}
          >
        </AgGridReact>
      </div>
      </Grid>
     
      </div>
    );
  }


export default GridView;