import meeting from './meeting';

export default function* rootSaga() {
    yield [
        meeting()
    ];
};
