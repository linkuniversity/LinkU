import * as types from '../actiontypes/Login';

export function fetchStatisticsInfos(){
    return {
        type : 'FETCH_STATISTICS_INFOS',
    };
}
export function StatisticsInfosRequest(){
    return {
        type : 'REQUEST_STATISTICS',
    };
}

export function StatisticsSuccess(payload){
    return {
        type : 'SUCCESS_STATISTICS',
        payload
    };
}

export function StatisticsFailure(error){
    return {
        type : 'FAILURE_STATISTICS',
        error
    };
}
