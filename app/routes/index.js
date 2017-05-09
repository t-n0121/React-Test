
// import express from 'express';

const express = require('express');

const router = express.Router();

// トップページ
router.get('/', (req, res, next) => {
  res.render('index', { title: 'express' });
});

module.exports = router;

