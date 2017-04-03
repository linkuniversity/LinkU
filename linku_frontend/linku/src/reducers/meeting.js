const initialState = {
    fetching : false,
    meeting_infos : []
};

export default function meetingCardInfos(state = initialState, action){
    switch (action.type) {
        case 'REQUEST_MEETING_CARD_INFOS':
        return {
            ...state,
            fetching: true
        };
        case 'RECEIVE_MEETING_CARD_INFOS':
        return {
            ...state,
            fetching: false,
            meeting_infos: action.meeting_infos
        };
        case 'RECEIVE_MEETING_CARD_INFOS_FAILED':
        return {
            ...state,
            fetching: false
        }
        default:
        return state;
    }
}
