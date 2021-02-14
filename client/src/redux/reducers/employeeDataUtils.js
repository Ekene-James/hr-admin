export const details = (data) => {
    let detail= {
        totalEmployees : data.data.length,
        currentEmployees : data.data
                            .filter((data) => data.employeeStatus == "Confirmed" )
                            .length,
        pendingEmployees : data.data
                            .filter((data) => data.employeeStatus == "Probation" )
                            .length,
        temporaryEmployees : data.data
                            .filter((data) => data.employmentType == "temporary employee" )
                            .length,
        nyscEmployees : data.data
                            .filter((data) => data.employmentType == "Nysc employee" )
                            .length,
        siwessEmployees : data.data
                            .filter((data) => data.employmentType == "Siwess Employee" )
                            .length,
    }
   
   
  return detail
    
  };