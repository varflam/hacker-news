const _baseUrl = 'https://hacker-news.firebaseio.com/v0/';

export const getLatestStories = async () => {
    try {
        const ids = await fetch(`${_baseUrl}newstories.json`)
                          .then(res => res.json());
        return ids;
    } catch (e) {
        console.log('Error while getting latest stories.');
    }
}

export const getStory = async (id) => {
    try {
        const res = await fetch(`${_baseUrl}item/${id}.json`)
                      .then(res => res.json());;
        return res;
    } catch (e) {
        console.log('Error while getting a story.');
    }
    
}

export const getAllStories = async (arr) => {
    try {
        const res = await Promise.all(arr.map(getStory));

        return res;
    } catch (e) {
        console.log('Error while getting stories.');
    }
}