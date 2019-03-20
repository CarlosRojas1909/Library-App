const titleInput = document.getElementById("input__title");
const authorInput = document.getElementById("input__author");
const publishedInput = document.getElementById("input__published");
const list = document.getElementById("allbooks");
const read = document.getElementById("read");
const unread = document.getElementById("unread");
const finalStatus = document.getElementsByName("checkbox");
const allbooksTitle = document.getElementById("allbooksTitle");


let books = [
    {title: "The Silent Patient", author: "Alex Michaelides", yearPublished: 2019, readingStatus: false},
    {title: "The Wicked King",    author: "Holly Black",      yearPublished: 2000, readingStatus: true},
    {title: "An Anonymous Girl",  author: "Greer Hendricks",  yearPublished: 2008, readingStatus: false},
    {title: "On the Come Up",     author: "Angie Thomas",     yearPublished: 2017, readingStatus: true},
    {title: "King of Scars",      author: "Leigh Bardugo",    yearPublished: 2018, readingStatus: true},
]


//function Constructor- creating instance of this function then push into array of objects
function AddData(title, author, yearPublished, readingStatus) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
    this.readingStatus = readingStatus;

}



const addBook = () => {

    const usertitle = titleInput.value.trim();
    const userAuthor = authorInput.value.trim();
    const userPublised = publishedInput.value.trim();
    let userbookStatus;
    //going through nodeList (similar to arrays but it doesn't have all array properties)
    for (let i = 0; i < finalStatus.length; i++) {
        if(finalStatus[i].checked) {
          userbookStatus = finalStatus[i].value === "one" ? true : false;
        }
    }
                            


    if(usertitle !== "" && userAuthor !== "" && userPublised !== "") {

        let newBook = new AddData(usertitle, userAuthor, userPublised, userbookStatus);
        books.push(newBook);
        reset();
    }
   
}




const updateArr = () => {
  

    let display;
    
    if(list.innerHTML !== "") {
        list.innerHTML = "";

         books.map((book) => {

            display = `<li>${book.title} - ${book.author} - ${book.yearPublished}</li>`

            list.insertAdjacentHTML("beforeend", display);

         });
        
        //    console.log(typeof display); I'm getting a nodeList
        reset();
        
    }
   
}

// function to display unread books
const bookStatus = () => {

    if(read.innerHTML !== "" && unread.innerHTML !== "") {
        read.innerHTML = "";
        unread.innerHTML = "";

    
        books.map((book) => {

                        if(book.readingStatus) {

                            let readList = `<li>${book.title} - ${book.author} - ${book.yearPublished}</li>`;
                            read.insertAdjacentHTML("beforeend", readList);
                            

                        } else {

                            let unreadList = `<li>${book.title} - ${book.author} - ${book.yearPublished}</li>`;
                            unread.insertAdjacentHTML("beforeend", unreadList);

                        }
                       

                    })
    }
          
}

//function to reset input boxes
const reset = () => {

    titleInput.value = "";
    authorInput.value = "";
    publishedInput.value = "";
}

