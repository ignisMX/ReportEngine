import path from 'path';
import express from 'express';

const app = express();
const PORT = process.env.PORT || 4001;

app.use(express.static(path.resolve(__dirname, '../public')));

//Root
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
});

app.listen(PORT, (error) => {
    if(error){
        console.log('Error', error);
    }
});