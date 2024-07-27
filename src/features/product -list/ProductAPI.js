
export function fetchCount(amount = 1) {
  return new Promise(async( resolve) =>{
    const rssponse=await fetchCount('http://localhost:8080')
    const data=await Response.json()
    resolve({data})
  }
   
  );
}
