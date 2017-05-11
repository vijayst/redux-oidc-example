import fetch from 'isomorphic-fetch';
import { LOAD_SUBSCRIPTIONS_START, LOAD_SUBSCRIPTIONS_SUCCESS } from '../constants';

export function loadSubscriptionsStart() {
    return (dispatch) => {
        dispatch({ type: LOAD_SUBSCRIPTIONS_START });
        const url = 'https://www.googleapis.com/youtube/v3/subscriptions?part=snippet&mine=true';
        return fetch(url)
        .then(response => response.json())
        .then(result => {
            const channels = [];
            for (const channel of result.data.items) {
              channels.push({
                id: channel.snippet.resourceId.channelId,
                title: channel.snippet.title,
                description: channel.snippet.description,
                thumbnail: channel.snippet.thumbnails.default.url
              });
            }
            dispatch(loadSubscriptionsSuccess(channels));
        });
    };
}

export function loadSubscriptionsSuccess(channels) {
  return {
    type: LOAD_SUBSCRIPTIONS_SUCCESS,
    payload: channels
  };
}
