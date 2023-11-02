const usersList = [];
function getUserByLogin(login) {
    const url = `https://api.github.com/users/${login}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
        if (data.message == "Not Found") {
            throw new Error("An error occured: This userName don't exist");
        }
        const user = {
            name: data.name,
            id: data.id,
            login: data.login,
            bio: data.bio,
            public_repos: data.public_repos,
            repos_url: data.repos_url,
        };
        usersList.push(user);
    });
}
function getRepository(login) {
    const url = `https://api.gitHub.com/users/${login}/repos`;
    fetch(url).then((response) => response.json().then((data) => {
        const reposList = [];
        for (let i = 0; i < 5; i++) {
            const oneRepository = {
                name: data.name,
                description: data.description,
                fork: data.fork,
                stargazers_count: data.stargazers_count,
            };
            reposList.push(oneRepository);
        }
        reposList.forEach((repos) => console.log(repos));
    }));
}
function viewOneUser(login) {
    const user = usersList.find((user) => user.login == login);
    console.log(`Name: ${user.name}`);
    console.log(`Bio: ${user.bio}`);
    getRepository(login);
}
function viewAllUsers() {
    usersList.forEach((user) => console.log(user));
}
function sumAllRepos() {
    let allRepos = 0;
    usersList.forEach((user) => {
        allRepos += user.public_repos;
    });
    console.log(`Total of repository: ${allRepos}`);
}
function biggestCommitters() {
    const commiters = [...usersList].sort((oneuser, otherUser) => otherUser.public_repos - oneuser.public_repos);
    console.log("Top commiters:");
    console.log(`1- ${commiters[0].name}, number of commits: ${commiters[0].public_repos}`);
    console.log(`2- ${commiters[1].name}, number of commits: ${commiters[1].public_repos}`);
    console.log(`3- ${commiters[2].name}, number of commits: ${commiters[2].public_repos}`);
}
getUserByLogin("LukasPio");
getUserByLogin("guizinelemsm");
getUserByLogin("rafaballerini");
getUserByLogin("filipedeschamps");
getUserByLogin("Fernanda-Kipper");
setTimeout(() => biggestCommitters(), 800);
