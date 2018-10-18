import { nbaDatabase } from '../nbaModel';

const getAllGamesData = async () => {
    return nbaDatabase.query(`SELECT * FROM games`);
}

const getAllGames = async (req, res, next) => {

    try {

        const gameRecords = await getAllGamesData();

        if (gameRecords.length === 0) {
            res.status(400).json({
                message: 'games records are empty'
            });
        } else {
            res.status(200).json({
                confirmation: 'success',
                result: gameRecords
            })
        }

        //Old way of doing primise
        // getAllGamesData()
        //     .then()
        //     .catch()

    } catch (error) {
        res.status(500).json({ error });
    }

}

export default getAllGames;