import React from 'react';
import { useSelector } from 'react-redux';
import loadingStyle from './LoadingComponent.module.css';

export default function LoadingComponent(props) {
    let { isLoading } = useSelector(state => state.LoadingReducer);

    if (isLoading) {
        return (
            <div className={loadingStyle.overlayLoading}></div>
        )
    } else {
        return '';
    }
}