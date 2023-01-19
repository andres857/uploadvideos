const path = require('path');
const video = require('./utils/video')

const videoUrl = 'https://alondono.myzonego.com/storage/Alondono/Prueba_uC8zLBgzYm/content48/image/gxvu5QUsUANmYkHfu5OPxvezweSwmwyv3yC7wSBT.mp4';
let title = path.basename(videoUrl)
const videoPath = path.join(__dirname, 'temp_storage', title);

async function main() {
    await video.download(videoUrl,videoPath)
}
main()