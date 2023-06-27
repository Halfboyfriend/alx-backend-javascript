/*eslint-disable */
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

function handleProfileSignup (firstName, lastName, filename) {
    const user = await signUpUser(firstName, lastName).then((data) => ({
        status: 'fulfilled',
        value: data,
      }));

      const file = await uploadPhoto(filename).catch((error) => ({
        status: 'rejected',
        value: error.toString(),
      }));

      return Promise.resolve([user, file]);

}