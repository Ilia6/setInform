const button = document.getElementById('getInfo');
button.addEventListener('click', function() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
      const list = document.createElement('ul');
      data.forEach(item => {
        const listItem = document.createElement('li');
        const title = document.createElement('h2');
        const text = document.createElement('p');
        title.textContent = item.title;
        text.textContent = item.body;
        listItem.appendChild(title);
        listItem.appendChild(text);
        list.appendChild(listItem);
      });
      document.body.appendChild(list);
    });
});