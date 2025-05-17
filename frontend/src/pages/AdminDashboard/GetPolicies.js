
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetPolicies = ({ token, policyType, setPolicies }) => {
  useEffect(() => {
    const fetchPolicies = () => {
      axios.get(`http://localhost:5001/api/admin/policies/${policyType}`, {
        headers: { Authorization: `Bearer ${token}` },
      }).then(res => setPolicies(res.data)).catch(console.error);
    };

    fetchPolicies();
  }, [token, policyType, setPolicies]);

  return (
    <div>
      <h3>Policy List</h3>
      {/* Add logic to display fetched policies */}
    </div>
  );
};

export default GetPolicies;
