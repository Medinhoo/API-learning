const express = require('express')
const app = express()
const mongoose = require('mongoose');
const uri = "mongodb+srv://chihimed:sFhugK3DNkLRVr5N@api-test.8o7qski.mongodb.net/API-test?retryWrites=true&w=majority&appName=API-TEST";
const productRoute = require('./routes/product.route')
const Store = require('./models/store.model.js');
const User = require('./models/user.model.js');


//////////////////////////////////
// permettre l'accès à l'API (CORS)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token,Origin, X-Requested-With, Content, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });


//middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
 
mongoose.connect(uri).then(()=>{
    console.log('connected to database')
    app.listen(3000, () => {
        console.log('the server is running')
    })
}).catch(()=> {
    console('connection failed')
})

//routes
app.use('/products', productRoute)

app.get('/stores', async (req, res)=> {
    try {
        const stores = await Store.find({}) 
        res.status(200, res.send(stores))
     } catch (error) {
         res.status(500).json({message: error.message})
     }
})

app.post('/stores', async (req, res)=> {
    try {
        const stores = await Store.create(req.body) 
        res.status(200, res.send(stores))
     } catch (error) {
         res.status(500).json({message: error.message})
     }
})


// Vérification ysername et password du user
app.post('/login', async (req, res)=> {
    const { username, password } = req.body; // Récupérer le nom d'utilisateur et le mot de passe depuis le corps de la requête

    try {
        // Recherchez l'utilisateur correspondant au nom d'utilisateur fourni
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }

        // Vérifiez si le mot de passe fourni correspond au mot de passe stocké pour cet utilisateur
        if (password !== user.password) {
            return res.status(401).json({ message: 'Mot de passe incorrect' });
        }

        // Authentification réussie
        res.status(200).json({ message: 'Connexion réussie' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Creer un user 
app.post('/users', async (req, res) => {
    const { username, password } = req.body; // Récupérer les données du nouvel utilisateur depuis le corps de la requête

    try {
        // Créer un nouvel utilisateur avec les données fournies
        const newUser = await User.create({ username, password });

        // Renvoyer une réponse indiquant que l'utilisateur a été créé avec succès
        res.status(201).json(newUser);
    } catch (error) {
        // En cas d'erreur lors de la création de l'utilisateur, renvoyer un message d'erreur
        res.status(500).json({ message: error.message });
    }
});




app.get('/', (req, res) => {
    res.send("Hello from the API server updated")
}) 