import React from 'react';
import ReactLoading from 'react-loading';

const Loading = ({ type, color }) => (
    <ReactLoading type={"bars"} color={"#00D4D0"} height={500} width={375} />
);

export default Loading;