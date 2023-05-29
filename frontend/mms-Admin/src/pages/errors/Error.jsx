import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const Error = ({ code, message }) => {
    return (
        <div>
            <Typography> {code} </Typography>
            <Typography variant='h4'> {message} </Typography>
        </div>
    );
}


Error.propTypes = {
    code: PropTypes.number,
    message: PropTypes.string
}
export default Error;
