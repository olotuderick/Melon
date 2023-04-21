import 'regenerator-runtime'
import 'dotenv/config'
import './db.js'
import app from './server.js'
import { async } from 'regenerator-runtime'

const PORT = process.env.PORT || 4000

const handleListening = async () =>{
  console.log(`✅ Server listenting on http://localhost:${PORT} 🚀`)
}

app.listen(PORT, handleListening)
