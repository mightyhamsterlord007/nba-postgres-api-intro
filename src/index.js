import app from './app';
import { nbaDatabase } from  './nba';


const { PORT = 8080 } = process.env;
//app.listen(PORT, () => console.log(`Listening on port ${PORT}`)); // eslint-disable-line no-console

nbaDatabase.sync({ logging: false, force: false })
    .then(function connectToPS() {

        app.listen(PORT, () => {
            console.log('nba database connected');
            console.log(`listening on PORT ${PORT}`)
        })

    }).catch(console.error); 