const config = {
        apiKey: "AIzaSyBRkwukSrjIDk3cVaJn2c7nVARHS6KX5qk",
        authDomain: "mercadodev-2d03c.firebaseapp.com",
        databaseURL: "https://mercadodev-2d03c.firebaseio.com",
        projectId: "mercadodev-2d03c",
        storageBucket: "gs://mercadodev-2d03c.appspot.com",
        messagingSenderId: "749993359268"
}

const Rebase = require('re-base')
const firebase = require('firebase/app')
require('firebase/database')
require('firebase/storage')

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

export const storage = app.storage()
export default base