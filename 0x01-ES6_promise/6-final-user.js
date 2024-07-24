import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled(signUpUser(firstName, lastName), uploadPhoto(fileName))
    .then((array) => {
      return array.map((obj) => {
        if (obj.status == 'fulfilled' ) {
          return { status: 'fulfilled', value: obj.value }
	}
	else {
	  return { status: 'rejected', reason: obj.reason }
	}

      })
    });
}
