function toggle(e) {
    e.target.classList.toggle('active');
}


document.querySelector('button').addEventListener('click', toggle);

const posts = [
    { title: 'Post 1', body: 'This is post 1' },
    { title: 'Post 2', body: 'This is post 2' },
    { title: 'Post 3', body: 'This is post 3' }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<h3><strong>${post.title}</strong></h3><p>${post.body}</p>`;
        });
        document.querySelector('.posts').innerHTML = output;
    }, 1000);
}

getPosts();

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

createPost({ title: 'Post 4', body: 'This is post 4' }, getPosts);