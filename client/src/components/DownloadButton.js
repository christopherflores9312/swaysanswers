import React from 'react';
import Button from '@mui/material/Button';

const DownloadButton = ({ videoS3Url }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {/* Download button */}
      <a href={videoS3Url} download style={{ textDecoration: 'none' }}>
        <Button variant="contained">
          Download
        </Button>
      </a>
    </div>
  );
};

export default DownloadButton;
