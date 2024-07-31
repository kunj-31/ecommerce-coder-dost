export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    resolve({ data });
  });
}
export function fetchProductsByFilters(filter, sort, pagination) {
  let queryString = "";
  for (let key in filter) {
    const categoryValues = filter[key];
    if (categoryValues.length) {
      const lastCategoryValue = categoryValues[categoryValues.length - 1];
      queryString += `${key}=${lastCategoryValue}&`;
    }
  }
  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }
  console.log(pagination);
  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }

  return new Promise(async (resolve) => {
    // const response = await fetch(
    //   "http://localhost:8080/products?" + queryString
    // );
    // const data = await response.json();
    // const totalItems = response.headers.get("X-Total-Count");
    // console.log(totalItems);
    // resolve({ data: { products: data, totalItems: +totalItems } });
    const response = await fetch(
      "http://localhost:8080/products?" + queryString
    );
    console.log(queryString);
    console.log(response);
    const data = await response.json();
    console.log(response);
    const totalItems = 100;
    console.log(totalItems);
    resolve({ data: { products: data, totalItems: +totalItems } });
  });
}
// export function fetchProductsByFilters(filter, sort, pagination) {
//   // filter = {"category":["smartphone","laptops"]}
//   // sort = {_sort:"price",_order="desc"}
//   // pagination = {_page:1,_limit=10}
//   // TODO : on server we will support multi values in filter
//   let queryString = "";
//   for (let key in filter) {
//     const categoryValues = filter[key];
//     if (categoryValues.length) {
//       const lastCategoryValue = categoryValues[categoryValues.length - 1];
//       queryString += `${key}=${lastCategoryValue}&`;
//     }
//   }
//   for (let key in sort) {
//     queryString += `${key}=${sort[key]}&`;
//   }
//   console.log(pagination);
//   for (let key in pagination) {
//     queryString += `${key}=${pagination[key]}&`;
//   }
//  console.log(queryString)
//   return new Promise(async (resolve) => {
//     //TODO: we will not hard-code server URL here
//     const response = await fetch(
//       "http://localhost:8080/products?" + queryString
//     );
//     console.log(response);
//     const data = await response.json();
//     const totalItems = 100;
//     resolve({ data: { products: data, totalItems: +totalItems } });
//   });
// }
// export function fetchProductsByFilters(filter, sort, pagination) {
//   let queryString = "";

//   // Build query string for filters
//   for (let key in filter) {
//     const values = filter[key];
//     if (values.length) {
//       values.forEach((value) => {
//         queryString += `${encodeURIComponent(key)}=${encodeURIComponent(
//           value
//         )}&`;
//       });
//     }
//   }

//   // Build query string for sorting
//   for (let key in sort) {
//     queryString += `${encodeURIComponent(key)}=${encodeURIComponent(
//       sort[key]
//     )}&`;
//   }

//   // Build query string for pagination
//   for (let key in pagination) {
//     queryString += `${encodeURIComponent(key)}=${encodeURIComponent(
//       pagination[key]
//     )}&`;
//   }

//   // Remove trailing '&' if present
//   if (queryString.endsWith("&")) {
//     queryString = queryString.slice(0, -1);
//   }

//   const url = `http://localhost:8080/products?${queryString}`;
//   console.log("Fetching URL:", url);

//   return new Promise(async (resolve, reject) => {
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log("Response Data:", data);

//       const totalItems = response.headers.get("X-Total-Count");
//       console.log("Total Items Header:", totalItems);

//       resolve({ data: { products: data, totalItems: +totalItems || 0 } });
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       reject(error); // Ensure to reject the promise in case of an error
//     }
//   });
// }
