import React from 'react';
import Button from '@mui/material/Button';

const DownloadButton = ({ S3URL }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {/* Download button */}
      <a href={S3URL} download style={{ textDecoration: 'none' }}>
        <Button variant="contained">
          Download
        </Button>
      </a>
    </div>
  );
};

export default DownloadButton;
