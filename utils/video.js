const axios = require('axios');
const fs = require('fs');
const path = require('path');
const credentials = require('../config')

async function download(videoUrl, pathToSave){
    let videoDownloaded = false;
    
    axios({
      method: 'get',
      url: videoUrl,
      responseType: 'stream',
      onDownloadProgress: (progressEvent) => {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        console.log(`Progress: ${percentCompleted}%`);
      }
    }).then(response => {
      const writeStream = fs.createWriteStream(pathToSave);
      response.data.pipe(writeStream);
      writeStream.on('finish', () => {
        videoDownloaded = true;
        console.log("Video downloaded");
      });
    }).catch(error => {
      console.error(error);
    });
}

async function upload(){
  let Vimeo = require('vimeo').Vimeo;
  let client = new Vimeo(credentials.client_id, credentials.client_secret, credentials.access_token);

  let file_name = '/home/andres/downloadsvideos/temp_storage/video.mp4'
  console.log(file_name);
  client.upload(
    file_name,
    {
      'name': 'videopruebaapi',
      'description': 'The description goes here.'
    },
    function (uri) {
      console.log('Your video URI is: ' + uri);
    },
    function (bytes_uploaded, bytes_total) {
      var percentage = (bytes_uploaded / bytes_total * 100).toFixed(2)
      console.log(bytes_uploaded, bytes_total, percentage + '%')
    },
    function (error) {
      console.log('Failed because: ' + error)
    }
  )
}

(()=>{
  upload()
})()

module.exports = {
    download
}