import React from 'react';
import { omit } from 'lodash';
const ResponsiveImage = (props) => (
    <img {...omit(props, "customStyle")} style={{maxWidth: "100%", height: "auto", ...props.customStyle }}/>
)

export default ResponsiveImage