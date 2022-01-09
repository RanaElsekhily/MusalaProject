const url = "https://saurav.tech/NewsAPI/top-headlines/category/health/in.json";
//"https://newsapi.org/v2/everything?q=tesla&from=2021-12-09&sortBy=publishedAt&apiKey=69748a26a56f4d7c884b2271041db0b3";

export async function getNews() {
    let result = await fetch(url).then(response => response.json());
    console.log('result');
    return result.articles;
}
