import { MongoClient } from "mongodb";

async function handler (req,res) {
    if(req.method==='POST') {
        const {email,name,message} = req.body;

        if(!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '' ) {
                res.status(422).json({message : 'invalid input'})
               
                return;
        }

   

        const newMessage = {
            email,
            name,
            message
        }


        let client;
       try{
       client = await  MongoClient.connect(`mongodb+srv://${process.env.database_username}:${process.env.database_password}@connorbcluster.telfxfx.mongodb.net/blog?retryWrites=true&w=majority`)
        
       }catch(err) {
        res.status(500).json({message: 'server error'})
        return;
       }


       const db = client.db()

       try{
        const result = await db.collection('message').insertOne(newMessage)
        

       }catch(err) {
        client.close()
        res.status(500).json({message : 'db error'})
        return;
       }

       client.close()
        

        res.status(201).json({message:'successfully send',data: newMessage})
    }
}

export default handler