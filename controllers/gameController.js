import Game from "../models/game.model.js";



const addGame = async (req, res) => {
    try {
        const { name, year, price, detail, image, review, platform } = req.body;

        // Ensure price is a valid number
        if (isNaN(price)) {
            return res.status(400).json({ error: "Price must be a valid number." });
        }

        // Ensure platform is an array and contains only valid values
        const validPlatforms = ["PS4", "PS5"];
        if (!Array.isArray(platform) || !platform.every(p => validPlatforms.includes(p))) {
            return res.status(400).json({ error: "Invalid platform selection." });
        }

        const newGame = new Game({
            name,
            year,
            price: Number(price), // Convert to number
            detail,
            image,
            review,
            platform, // Include platform in the schema
        });

        const savedGame = await newGame.save();
        res.json(savedGame);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
};





const getAllGames = async(req,res) =>{

    try{
    
     const allGames = await Game.find();

     res.json(allGames);

    }
    
    catch(error){

     res.status(400).json({error: error.message})

    }


}


const updatedGame = async(req,res) =>{

     try{

       const {id} = req.params;
       const gameUpdate = await Game.findByIdAndUpdate(id , req.body ,{new:true}) 
       
       if(!gameUpdate){
          return res.status(404).json('Movie Not Found')
       }

       res.json(gameUpdate);


     }

     catch(error){
    
          res.status(400).json({error:error.message})

     }

}



const deleteGame = async(req,res) =>{

    try{

    const {id} = req.params;

    const deletedGame = await Game.findByIdAndDelete(id)

    if(!deletedGame){

        res.status(404).json('Game Not Found')

    }

    res.status(200).json("Game Deleted Sucessfully");

    


    
    
    
    }
    
    
catch(error){
      res.status(500).json(error)
}


}



export {addGame  , getAllGames , updatedGame ,  deleteGame};