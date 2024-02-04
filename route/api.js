import express from 'express';
import { igApi, getCookie } from 'insta-fetcher';
import axios from 'axios';
import { BingApi } from "bing-nodejs";
const sh = express.Router();

const creator = 'https://github.com/pitucode';

const no_query = {
  creator: creator,
  message: 'Mohon maaf, tidak ada query yang dimasukkan ke dalam.'
};

const no_link_message = {
  creator: creator,
  message: 'Mohon maaf, tidak ada URL yang dimasukkan ke dalam.'
};

const no_user_message = {
  creator: creator,
  message: 'Mohon maaf, tidak ada USER yang dimasukkan ke dalam.'
};

const Error_message = {
  creator: creator,
  message: 'Maaf, terjadi kesalahan internal pada server. Silakan coba lagi nanti atau hubungi tim dukungan teknis.'
};

sh.get('/instagram', async (req, res) => {
  if (!req.query.url) return res.status(400).json(no_link_message);
  const ig = new igApi(""); //Cookie instagram.com
  ig.fetchPost(req.query.url)
    .then((v) => {
      res.status(200).json({
        creator: creator,
        ...v
      });
    })
    .catch((Error) => {
      console.log(Error);
      res.status(500).json(Error_message);
    });
});

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


export default sh;