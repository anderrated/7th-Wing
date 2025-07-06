const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const dbSetup = require('./database');

let db; // holds SQLite connection

app.whenReady().then(async () => {
  db = await dbSetup.setup();
  createWindow();
});

function createWindow() {
  const win = new BrowserWindow({
    width: 500,
    height: 600,
    webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
    },
  });

  win.loadFile('login.html');
}

// IPC handlers for renderer (UI) to communicate with main process (backend) - inter-process communication
ipcMain.handle('create-user', async (event, { email, password }) => {
    const result = await db.run(
        `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`,
        ['TEMP', email, password] // name is temporary in the meantime
    );
    return result.lastID;
});