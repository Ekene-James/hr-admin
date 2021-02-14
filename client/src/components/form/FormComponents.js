import TextField from '@material-ui/core/TextField';
import NumberFormat from 'react-number-format';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';

export const select = ({
    input,
    options,
    label,
    
    meta: { touched, error }
  }) => {
    return (
      <div>
       
        <TextField
              select
              label ={`${label}*`}
              variant="outlined"
              {...input}
              margin="normal"
              fullWidth
              {...(touched && error && {error : true,helperText : error })}
             
            >
                {options && options.map((option, i) => {
          return (
            <MenuItem key={i} value={option}>
            {option}
          </MenuItem>
           
          );
        })}
             
             
            </TextField>
        
       
      </div>
    );
  };
  export const text = ({
    input,
    type,
    placeholder,
    id,
    icon,
    sm,
    label,
   
    meta: { touched, error }
  }) => {
    return (
      <div>
        
        <TextField
             variant="outlined"
              placeholder={placeholder}
              type={type}
              {...input}
              
              label={label}
              margin="normal"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {icon && icon}
                  </InputAdornment>
                ),
              }}
              {...(touched && error && {error : true,helperText : error })}
            />
        
       
      </div>
    );
  };
  export const numberFormat = ({
    input,
    type,
    placeholder,
    id,
    icon,
    sm,
    label,
   
    meta: { touched, error }
  }) => {
    return (
      <div>
        <NumberFormat value={input} displayType={'text'} thousandSeparator={true} prefix={'$'} />
     
        
       
      </div>
    );
  };