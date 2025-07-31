const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch('https://www.thesportsdb.com/api/v1/json/123/lookup_all_players.php?id=139822')
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));