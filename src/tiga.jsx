function formatName() {
    return user.firstName + '' +user.lastName;
}

const user = {
    firstName: 'sisi',
    lastName: 'cantik'
};

const element = (
    <h1>
        Hello, {formatName(user)}! </h1>
);

function Tiga() {
    return (
        element
    );
}
export default Tiga;