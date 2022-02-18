import React from 'react';
import { Table } from '../../../infrastructure/components/index';
import { rows  } from '../../../infrastructure/components/table/tableConstant';

const Dashboard = () => {

  const handleSelect = () => {
  // get to a single checkbox id add parameter over here and check output 
  };

  const handleSelectAllData = () => {
    // to get selectAll checkbox ID add parameter over here and check output 
  };

  return (
    <>
    <Table 
    isCheckbox 
    rows={rows} 
    handleSelect={handleSelect} 
    handleSelectAllData={handleSelectAllData}
    />
    </>
  );
};

export default Dashboard;