import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {loadingAC} from "./bll/loadingReducer";
import {Dispatch} from "redux";
import {AppStoreType} from "./bll/store";
import {CircularProgress, Box} from '@mui/material';

function HW10() {
    // useSelector, useDispatch

    const loading = useSelector((state: AppStoreType) => state.loading.loadingValue)
    const dispatch = useDispatch<Dispatch>()


    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => dispatch(loadingAC(false)), 2000)
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {
                loading
                    ? (
                        <Box sx={{display: 'flex'}}>
                            <CircularProgress/>
                        </Box>
                    ) : (
                        <div>
                            <SuperButton onClick={setLoading}>set loading...</SuperButton>
                        </div>
                    )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
