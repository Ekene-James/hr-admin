import { Grid } from '@material-ui/core'
import React from 'react'

function View({employee}) {
    return (
        <Grid container  spacing={4}>
        <Grid item xs={3}>
           ID
        </Grid>
        <Grid item xs={9}>
            {employee._id}
        </Grid>
        <Grid item xs={3}>
            Name
        </Grid>
        <Grid item xs={9}>
            {`${employee.firstName} ${employee.lastName}`}
        </Grid>
        <Grid item xs={3}>
           Gender
        </Grid>
        <Grid item xs={9}>
            {employee?.gender}
        </Grid>
        <Grid item xs={3}>
           Employment Type
        </Grid>
        <Grid item xs={9}>
            {employee?.employmentType}
        </Grid>
        <Grid item xs={3}>
           Marital Status
        </Grid>
        <Grid item xs={9}>
            {employee?.maritalStatus}
        </Grid>
        <Grid item xs={3}>
            Phone Number
        </Grid>
        <Grid item xs={9}>
            {employee.phoneNumber}
        </Grid>
        <Grid item xs={3}>
            Date of Birth
        </Grid>
        <Grid item xs={9}>
        {employee.dob}
        </Grid>
        <Grid item xs={3}>
            Nationality
        </Grid>
        <Grid item xs={9}>
        {employee.nationality}
        </Grid>
        <Grid item xs={3}>
           Permanent Address
        </Grid>
        <Grid item xs={9}>
        {employee.permanentAddress}
        </Grid>
        <Grid item xs={3}>
           Official Email
        </Grid>
        <Grid item xs={9}>
           {employee.officialEamil}
        
        </Grid>
        <Grid item xs={3}>
         Gross Salary
        </Grid>
        <Grid item xs={9}>
            {employee.grossSalary}
        </Grid>
        <Grid item xs={3}>
         Account Number
        </Grid>
        <Grid item xs={9}>
            {employee.accountNumber}
        </Grid>
        <Grid item xs={3}>
         Bank Verification Number
        </Grid>
        <Grid item xs={9}>
            {employee.bankVerificationNumber}
        </Grid>
        <Grid item xs={3}>
         Pension Number
        </Grid>
        <Grid item xs={9}>
            {employee.pensionNumber}
        </Grid>

    </Grid>
    )
}

export default View
