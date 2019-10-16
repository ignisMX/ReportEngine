import path from 'path';
import express from 'express';

const app = express();
const PORT = process.env.PORT || 40001;

app.use(express.static(path.resolve(__dirname, '../public')));

app.listen(PORT, (error) => {
    if(error){
        console.log('Error', error);
    }
});