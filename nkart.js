document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// let showPhys = () => {
//     document.querySelector('.participant__physic').style.display = "flex";
//     document.querySelector('.participant__ur').style.display = "none";
// }
//
// let showUr = () => {
//     document.querySelector('.participant__ur').style.display = "flex";
//     document.querySelector('.participant__physic').style.display = "none";
// }

// let filesDone = 0
// let filesToDo = 0
// let progressBar = document.getElementById('progress-bar')
//
// let dropArea = document.getElementById('dropArea')
// let formButton = document.getElementById('fileElem');
//
// formButton.addEventListener('change', buttonChange, false);
// ;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
//   dropArea.addEventListener(eventName, preventDefaults, false)
// })
//
// function preventDefaults (e) {
//   e.preventDefault()
//   e.stopPropagation()
// }
//
// ;['dragenter', 'dragover'].forEach(eventName => {
//   dropArea.addEventListener(eventName, highlight, false)
// })
// ;['dragleave', 'drop'].forEach(eventName => {
//   dropArea.addEventListener(eventName, unhighlight, false)
// })
// function highlight(e) {
//   dropArea.classList.add('highlight')
// }
// function unhighlight(e) {
//   dropArea.classList.remove('highlight')
// }
//
// dropArea.addEventListener('drop', handleDrop, false)
// function handleDrop(e) {
//   let dt = e.dataTransfer
//   let files = dt.files
//   handleFiles(files)
// }
// formButton.addEventListener('change', buttonChange, false);
// function buttonChange(event) {
//     let files = formButton.files;
//     handleFiles(files);
// }
// function handleFiles(files) {
//     files = [...files]
//     initializeProgress(files.length)
//     files.forEach(uploadFile)
// }
//
// function buttonChange(event) {
//     let files = formButton.files;
//     handleFiles(files);
// }
//
// function uploadFile(file) {
//   let url = 'mailto:meilihuang248@gmail.com'
//   let formData = new FormData()
//   formData.append('file', file)
//   fetch(url, {
//     method: 'POST',
//     body: formData
//   })
//   .then(progressDone)
//   .catch(() => { /* Ошибка. Сообщаем пользователю */ })
// }
//
// function initializeProgress(numfiles) {
//   progressBar.value = 0
//   filesDone = 0
//   filesToDo = numfiles
// }
// function progressDone() {
//   filesDone++
//   progressBar.value = filesDone / filesToDo * 100
// }
// let dropArea = document.getElementById('dropArea');
// ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
//     dropArea.addEventListener(eventName, preventDefaults, false);
// });
//
// function preventDefaults (e) {
//     e.preventDefault();
//     e.stopPropagation();
// }
//
// ['dragenter', 'dragover'].forEach(eventName => {
//     dropArea.addEventListener(eventName, highlight, false)
// });
// ['dragleave', 'drop'].forEach(eventName => {
//     dropArea.addEventListener(eventName, unhighlight, false)
// });
// function highlight(e) {
//     dropArea.classList.add('highlight')
// }
// function unhighlight(e) {
//     dropArea.classList.remove('highlight')
// }
// dropArea.addEventListener('drop', handleDrop, false)
// function handleDrop(e) {
//   let dt = e.dataTransfer
//   let files = dt.files
//   handleFiles(files)
// }
// function handleFiles(files) {
//     files = [...files]
//     console.log(files);
//     initializeProgress(files.length)
//     files.forEach(uploadFile)
// }
// function uploadFile(file) {
//   // let url = '/load'
//   // let formData = new FormData()
//   // formData.append('file', file)
//   // fetch(url, {
//   //   method: 'POST',
//   //   body: formData
//   // })
//   // .then(() => { progressDone })
//   // .catch(() => { alert("error") })
//   progressDone
// }
//
// let filesDone = 0
// let filesToDo = 0
// let progressBar = document.getElementById('progress-bar')
//
// function initializeProgress(numfiles) {
//   progressBar.value = 0
//   filesDone = 0
//   filesToDo = numfiles
//   console.log("olo");
// }
// function progressDone() {
//   filesDone++
//   progressBar.value = filesDone / filesToDo * 100
// }
