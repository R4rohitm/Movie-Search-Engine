
# Movie Search Engine  
A movie search engine application that helps you find any movie from all over the world. You can also get all the information related to that movie such as rating, cast, director, year, genre and everything. 


## Screenshots

![App Screenshot](https://imgur.com/jUCZa80.png)


## 🛠 Skills
Javascript, HTML, CSS, API


## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.

