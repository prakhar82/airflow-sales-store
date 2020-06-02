import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { FormControl ,InputAdornment } from '@material-ui/core';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
      marginLeft : '50px',
      marginTop : '50px'
    },
  },
}));

export default function InputForm() {

  const storeLocationMap = [
    { title: 'New York'},
    { title: 'Miami' },
    { title: 'Miami' },
    { title: 'Washington' },
    { title: 'London' },
    ];
const productCategoryMap = [
    { title: 'Electronics'},
    { title: 'Furniture' },
    { title: 'Kitchen' },
    { title: 'Fashion' },
    { title: 'Cosmetics' },
    ];
const currencies = [
  {
    value: 'USD',
    label: '$ (USD)',
  },
  {
    value: 'EUR',
    label: '€ (EUR)',
  },
  {
    value: 'BTC',
    label: '฿ (BTC)',
  },
  {
    value: 'JPY',
    label: '¥ (JPY)',
  },
];



  const classes = useStyles();
  const [storeId , setStoreId] = React.useState("");
  const [storeLocation , setStoreLocation] = React.useState("");
  const [productCategory , setProductCategory] = React.useState("");
  const [productId , setProductId] = React.useState("");
  const [retailPrice , setRetailPrice] = React.useState("");
  const [costPrice , setCostPrice] = React.useState("");
  const [discount , setDiscount] = React.useState("");
  const [sellingPrice , setSellingPrice] = React.useState("");

  const [currency, setCurrency] = React.useState('USD');
  
  const [errorStoreId , setErrorStoreId] = React.useState("");
  const [errorStoreLocation , setErrorStoreLocation] = React.useState("");
  const [errorProductCategory , setErrorProductCategory] = React.useState("");
  const [errorProductId , setErrorProductId] = React.useState("");
  const [errorRetailPrice , setErrorRetailPrice] = React.useState("");
  const [errorCostPrice , setErrorCostPrice] = React.useState("");
  const [errorDiscount , setErrorDiscount] = React.useState("");
  const [errorSellingPrice , setErrorSellingPrice] = React.useState("");
 // const [errorStoreId , setErrorStoreId] = React.useState("");


  const handleChangeLocation = (event) => {
      console.log(event.target.value);
  }
  const handleChangeCurrency = (event) => {
    setCurrency(event.target.value);
  };
  const handleChangeStoreId = (event) => {
    setStoreId(event.target.value);
  }
  const handleChangeStoreLocation = (event) => {
    setStoreLocation(event.target.value);
  }
  const handleChangeProductCategory = (event) => {
    setProductCategory(event.target.value);
  }
  const handleChangeProductId = (event) => {
    setProductId(event.target.value);
  }
  const handleChangeRetailPrice = (event) => {
    setRetailPrice(event.target.value);
  }
  const handleChangeCostPrice = (event) => {
    setCostPrice(event.target.value);
  }
  const handleChangeDiscount = (event) => {
    setDiscount(event.target.value);
  }
  const handleChangeSellingPrice = (event) => {
    setSellingPrice(event.target.value);
  }

  const mySubmitHandler = (event) => {
    event.preventDefault();
    if(storeId.length===0)
    {
      setErrorStoreId("Store ID Can not be blank");
    }
  }
  /* const actions = [
    <Button
      type="reset"
      label="Reset"
      secondary={true}
      style={{ float: 'left' }}
      />,
    <Button
      label="Cancel"
      primary={true}
     // onClick={this.handleClose}
      />,
    <Button
      type="submit"
      label="Submit"
      primary={true}
      />,
  ]; */

  return (
      
    <form onSubmit={mySubmitHandler} className={classes.root} noValidate  autoComplete="off">
        
   
      <div>
 
      <TextField
          
          id="storeId"
          label="Store ID"
          defaultValue=""
          placeholder="AZ1234"
          error={!!errorStoreId}
          helperText= {errorStoreId}
          onChange={handleChangeStoreId}
         
        //  error = {true}
          
         
        />
        
       <TextField
          id="storeCurrency"
          select
          label="Country"
          value={currency}
          onChange={handleChangeCurrency}
          helperText="Please select your currency"
    
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div>
      <Autocomplete
        id="storeLocation"
        freeSolo
        options={storeLocationMap.map((option) => option.title)}
        renderInput={(params) => (
          <TextField {...params} 
          label="Store Location" 
          margin="normal" 
         
          error={!!errorStoreLocation}
          helperText= {errorStoreLocation}
          onChange={handleChangeStoreLocation}  />
        )}
      />
      <Autocomplete
        id="productCategory"
        freeSolo
        options={productCategoryMap.map((option) => option.title)}
        renderInput={(params) => (
          <TextField {...params}
           label="Product Category"
           margin="normal"
           error={!!errorProductCategory}
           helperText= {errorProductCategory}
           onChange={handleChangeProductCategory} />
        )}
      />
       <TextField
          
          id="productId"
          label="Product ID"
          defaultValue=""
          placeholder="12254943"
          error={!!errorProductId}
          helperText= {errorProductId}
          onChange={handleChangeProductId} 

          
         
        />
      </div>
      <div>
      <TextField
          
          id="retailPrice"
          label="MRP (Maximum Retail Price)"
          type="number"
          defaultValue=""
          error={!!errorRetailPrice}
          helperText= {errorRetailPrice}
          onChange={handleChangeRetailPrice} 
          InputProps={{
          startAdornment: <InputAdornment position="start">{currency}</InputAdornment>,
          }}
         
        />
      <TextField
          
          id="costPrice"
          label="CP"
          type="number"
          defaultValue=""
          error={!!errorCostPrice}
          helperText= {errorCostPrice}
          onChange={handleChangeCostPrice} 
         
          InputProps={{
            startAdornment: <InputAdornment position="start">{currency}</InputAdornment>,
          }}
         
        />
        <TextField
          
          id="discount"
          label="Discount"
          type="number"
          defaultValue=""
          error={!!errorDiscount}
          helperText= {errorDiscount}
          onChange={handleChangeDiscount} 
          InputProps={{
            startAdornment: <InputAdornment position="start">{currency}</InputAdornment>,
          }}
         
        />
        <TextField
          
          id="sellingPrice"
          label="SP"
          type="number"
          defaultValue=""
          error={!!errorSellingPrice}
          helperText= {errorSellingPrice}
          onChange={handleChangeSellingPrice} 
          InputProps={{
            startAdornment: <InputAdornment position="start">{currency}</InputAdornment>,
          }}
         
        />
      </div>
     <input type = "submit" value = "Submit"/>
   
    </form>
  );
}