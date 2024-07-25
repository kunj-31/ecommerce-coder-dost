
export function fetchCount(amount = 1) {
  return new Promise(async( resolve) =>{
    const Response=await fetchCount('http://localhost:8080')
    const data=await Response.json()
    resolve({data})
  }
   
  );
}
