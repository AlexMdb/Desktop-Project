async function getTitle(){
    try{

        // Fetches the titles from the reddit API
        const response = await fetch('https://www.reddit.com/r/all/.json');

        const jsonData = await response.json();

        // Extracts titles from the Json
        var posts = [{title: jsonData.data.children[0].data.title, url: 'https://www.reddit.com' + jsonData.data.children[0].data.permalink},
                     {title: jsonData.data.children[1].data.title,  url: 'https://www.reddit.com' + jsonData.data.children[1].data.permalink},
                     {title: jsonData.data.children[2].data.title,  url: 'https://www.reddit.com' + jsonData.data.children[2].data.permalink}];

        // Finds the <li> element in the html
        const newsDisplay = document.querySelectorAll('#News li');

        const newsLinks = document.querySelectorAll('#News a');

        // Loops trough the <li> elements and titles, and puts the titles inside the <li> elements
        for(let i = 0; i < newsDisplay.length && i <posts.length; i++){
            newsDisplay[i].textContent = posts[i].title;

            newsLinks[i].href = posts[i].url
        }
    }
    catch (err){
        console.error('Error Fetching Resources', err);
    }
}

getTitle();

// Atualizes the News every four hours
setInterval(getTitle, 4 * 60 * 60 * 1000);