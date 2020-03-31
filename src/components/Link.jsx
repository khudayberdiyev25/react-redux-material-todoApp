import React from 'react';
import Button from '@material-ui/core/Button';

const Link = ({ active, onClick, children }) => (
  <Button
      variant="contained"
      color="secondary"
      onClick={ onClick }
      disabled={ active }
      style={{
        marginLeft: '4px',
        padding: '0.5rem'
      }}
  >
    { children }
  </Button>
)

export default Link;
