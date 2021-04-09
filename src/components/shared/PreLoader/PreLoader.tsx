import React from 'react';

import css from "./PreLoader.module.scss";

const PreLoader: React.FC = React.memo(props => {

    const  {...restProps} = props;

    return <div className={css.preLoaderCubic} {...restProps}/>
});

export default PreLoader;