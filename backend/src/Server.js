import App from './App.js'

const PORT = process.env.PORT || 3000;
App.listen(PORT, () => console.log`Servidor rodando na porta ${PORT}`)

