const fetchData = async () => {
    const response = await axios.get('https://api.mydomain.com');
    setData(response.data);
}
  fetchData();

  <div>
      <ul>
        {
          users.filter(user => user.name.includes(query)).map(user => (<li>{user.name}</li>))
        }
      </ul>
    </div>