const { app, BrowserWindow } = require('electron');

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        backgroundColor: '#ffffff',
        icon: ''
    })
	// Show the content on created window
    win.loadURL(`file://${__dirname}/dist/index.html`);
    // uncomment below to open devtools
    // win.webContents.openDevTools();

    win.on('closed', function () {
        win = null;
    })
}//end-createWindow

// create window  on electron initialization
app.on('ready', createWindow)
// Quit all windows are closed
app.on('window-all-closed', function () {
    // on macos specific close process
    if (process.platform !== 'darwin') {
        app.quit();
    }
})
app.on('activate', function () {
    // macOs specific close process
    if (win === null) {
        createWindow();
    }
})