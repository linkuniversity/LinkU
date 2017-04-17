const initialState = {
    fetching : false,
    statistics_infos : []
};

export default function statisticsInfos(state = initialState, action){
    switch (action.type) {
        case 'REQUEST_STATISTICS':
        return {
            ...state,
            fetching: true
        };
        case 'SUCCESS_STATISTICS':
        return {
            ...state,
            fetching: false,
            statistics_infos: action.payload
        };
        case 'FAILURE_STATISTICS':
        return {
            ...state,
            fetching: false,
            error: action.error
        };
        default:
        return state;
    }
}
