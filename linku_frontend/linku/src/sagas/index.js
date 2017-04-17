import meeting from './meeting';
import login from './Login';
import statistics from './Statistics';

export default function* rootSaga() {
    yield [
        meeting(), login(), statistics()
    ];
};
