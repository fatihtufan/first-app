import PropsTypes from "prop-types";



function User({ name, surname, age, isLoggedIn, friends }) {
    return (
        <>
            <h1>{isLoggedIn ? `${name} ${surname} (${age})` : "Giriş Yapmadınız."}</h1>

            {
                friends.map(friend => <div key={friend.id}>{friend.name}</div>)
            }

        </>
    );
}

User.propTypes = {
    name: PropsTypes.string,
    surname: PropsTypes.string,
    isLoggedIn: PropsTypes.bool,
    age: PropsTypes.number,
    friends: PropsTypes.array,

};

export default User;