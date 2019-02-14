const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();

const PORT = process.env.PORT || 3000;

const io = require('socket.io')(PORT);

let history = [];
let recent = []

io.on('connection', socket => {

  console.log('Connected', socket.id);
  socket.emit('initialize', recent);

  socket.on('troll', (payload) => {
    updateHistory(payload);
    socket.emit('incoming', recent);
  });
  
  socket.on('history', () => {
    socket.emit('incoming', history);
  });
  
});

function updateHistory(payload) {
  history.push(payload);
  if(history.length < 1000) {
    history = history.slice(-1000);
  }
  recent = history.slice(-15)
}