Base Rest Api Swagger Type module
## Installation


```bash
> git clone https://github.com/pitucode/apiswagger
> cd apiswagger
> npm i
```


## Start


```bash
> node .
```




    
Check your site in http://localhost:5000

## Authors

- [@pitucode](https://www.github.com/pitucode)


## Usage/Examples

```javascript
sh.get('/tiktok', async (req, res) => {
  if (!req.query.url) return res.status(400).json(no_link_message);

  try {
    const response = await axios.get(`https://pitucode.com/downloader/tiktok?apikey=${yourapikey}&url=${req.query.url}`);
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).json(Error_message);
  }
});
```

