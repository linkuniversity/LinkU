import meeting from './meeting';
import login from './Login';

export default function* rootSaga() {
    yield [
        meeting(), login()
    ];
};
