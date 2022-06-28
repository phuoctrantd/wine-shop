import React from "react";
import LinearProgress from '@mui/material/LinearProgress';
import { useSelector } from "react-redux";
import { styled } from "@mui/system";

const StyledLoading = styled(LinearProgress)`
position: fixed !important;
top: 0;
left: 0;
right: 0;
`
    
export default function Loading() {
    const loading = useSelector(state => state.app.loading)
    if(loading > 0){

        return <StyledLoading></StyledLoading>
    }
    return null
}
