const getTheTitles = function(books) {
    const userArray = books;
    let filteredItems = userArray.map((item) => {
      return item.title;
    })
    console.log(filteredItems);
};

// Do not edit below this line
module.exports = getTheTitles;
