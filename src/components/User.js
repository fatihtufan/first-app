import PropsTypes from "prop-types";



function User({ name, surname, age, isLoggedIn, friends }) {
    return (
        <>
            <h1>{isLoggedIn ? `${name} ${surname} (${age})` : "Giriş Yapmadınız."}</h1>

            {friends &&
                friends.map(friend => <div key={friend.id}>{friend.name}</div>)
            }

        </>
    );
}

User.propTypes = {
    name: PropsTypes.string.isRequired, // isRequired ile zorunlu alan olduğunu belirtmiş oluruz
    surname: PropsTypes.string.isRequired,
    isLoggedIn: PropsTypes.bool.isRequired,
    age: PropsTypes.oneOfType([  // bu şekilde hem string hem de number değer alabilir
        PropsTypes.number, 
        PropsTypes.string 
    ]).isRequired,
    friends: PropsTypes.array,

};

export default User;