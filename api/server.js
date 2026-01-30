const express = require('express')
const multer = require('multer')
const app = express()

const upload = multer({ dest: 'uploads/' })

app.post('/upload', upload.any(), (req, res) => {
  console.log('Screenshot received:', req.body.reason)
  res.json({ status: 'ok' })
})

app.get('/', (req, res) => {
  res.send('wang_AC API RUNNING')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log('API running on port', PORT)
})
