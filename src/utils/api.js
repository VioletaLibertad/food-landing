
export const fetchArticlesList = async (params) => {
  
  let url = 'https://5eed24da4cbc340016330f0d.mockapi.io/api/articles';
  url = params !== 'all' ? url+`?filter=${params}` : url;

  const response = await fetch(url);
  if (response.ok) {
    let data = await response.json();
    return data;
  } else {
    return false;
  }
}