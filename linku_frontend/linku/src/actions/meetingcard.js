export function fetchMeetingCardInfos(){
    return {
        type: 'FETCH_MEETING_CARD_INFOS'
    };
}

export function requestMeetingCardInfos(){
    return {
        type: 'REQUEST_MEETING_CARD_INFOS'
    };
}

export const receiveMeetingCardInfos = (meeting_infos) => ({
    type: 'RECEIVE_MEETING_CARD_INFOS',
    meeting_infos,
});

export const receiveMeetingCardInfosFailed = () => ({
    type: 'RECEIVE_MEETING_CARD_INFOS_FAIL',
});
