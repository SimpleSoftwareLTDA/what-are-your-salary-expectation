const apiKey = process.env.NINJA_API_KEY;
const url = 'https://api.openwebninja.com/jsearch/company-job-salary?job_title=Software+%20Developer&company=Amazon&years_of_experience=LESS_THAN_ONE';

if (!apiKey) {
    console.error("No API key in env");
    process.exit(1);
}

fetch(url, {
    headers: {
        'x-api-key': apiKey,
        'Content-Type': 'application/json'
    }
})
    .then(r => {
        console.log("Status:", r.status);
        return r.text();
    })
    .then(t => {
        console.log("Body:", t);
    })
    .catch(e => console.error(e));
