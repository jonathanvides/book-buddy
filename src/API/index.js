const APIURL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api"

const fetchAllBooks = async () => {
    try {
        const response = await fetch(`${APIURL}/books`);
        const result = await response.json();
        console.log(result)
        if (result.error) throw result.error;
        return result.books;
    } catch (err) {
        console.error("Uh oh, having trouble fetching all books!", err);
    }
}

const fetchSingleBook = async (bookId) => {
    try {
        const response = await fetch(`${APIURL}/books/${bookId}`);
        const result = await response.json();
        if (result.error) throw result.error;
        return result.book;
    } catch (err) {
        console.error("Uh oh, having trouble fetching book!", err);
    }
}

const fetchUser = async (token) => {
    try {
        const response = await fetch(`${APIURL}/users/me`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        });
        const result = await response.json();
        return result;
    } catch (err) {
        console.log("Uh oh, having trouble fetching user details!", err);
    }
}

const fetchReservation = async (bookId, token) => {
    try {
        const response = await fetch (`${APIURL}/books/${bookId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({
                available: false,
            })
        });
        const result = await response.json();
        return result;
    } catch (err) {
        console.log("Uh oh, having trouble fetching book reservation!", err);
    }
}

export { fetchAllBooks, fetchSingleBook, fetchUser, fetchReservation }