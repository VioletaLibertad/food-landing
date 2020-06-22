
export const fetchArticlesList = async () => {

  let url = 'https://5eed24da4cbc340016330f0d.mockapi.io/api/articles';
  // url = params.filter ? url+`?filter=${params.filter}` : url;

  const response = await fetch(url);
  if (response.ok) {
    let data = await response.json();
    return data;
  } else {
    return false;
  }
}