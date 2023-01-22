export const categoriesFunc = () => {
    fetch('http://localHost:3001/categories').then((response) => {
        console.log(response);
    }) 

    
}