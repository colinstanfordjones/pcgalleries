import {
  PHONE_SERVER_CALLBACK,
  PHONE_UPDATE_FIELDS
} from '../constants';

var self = this;

const audioConstraints = navigator.mediaDevices.getUserMedia({
  audio: true
}).then(stream => self.audioElement.srcObject = stream)
.catch(err => console.log(err.name + ": " + err.message));

export const voice = (state = audioConstraints, action: any) => {
  switch (action.type) {
    case PHONE_SERVER_CALLBACK:
      return {
          ...action.updatedVoice
      }
    case PHONE_UPDATE_FIELDS:
      return {
          ...action.updatedVoice
        }
    default:
      return state
  }
}

export default {
  voice
}