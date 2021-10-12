const fetch = require("node-fetch");

async function main() {
    try {
        let fetchResponse = await fetch(
            "https://api.github.com/users/angatupyry"
        );
        const result = await fetchResponse.json();

        fetchResponse = await fetch(response.repos_url);

        const repos = await fetchResponse.json();

        repos.forEach((r)=> {
            console.log(r.name);
        });
    } catch (error) {
        console.log(error);
    }
}