import React, { useState } from 'react';
import ResultAnalysis from './ResultAnalysis';
import useUserName from '../../../../hooks/useUserName';

const ResultAnalysisContainer = () => {
  const username = useUserName();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(prev => !prev);

  return <ResultAnalysis handleToggleButton={handleOpen} isOpen={open} userName={username} />;
};

export default ResultAnalysisContainer;
