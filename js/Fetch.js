async function getUsers() {
    // let url = 'https://geo.ipify.org/service/account-balance?apiKey=at_Zxu07lt1jk0FD65l10JMqAPmueLTS';
    let url = 'https://geo.ipify.org/api/v2/country,city?apiKey=at_Zxu07lt1jk0FD65l10JMqAPmueLTS&ipAddress=8.8.8.8';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}


async function renderUsers() {
    let users = await getUsers();
    // users.forEach(user => {
        
        console.log(users);
    // });

}

export default renderUsers;

