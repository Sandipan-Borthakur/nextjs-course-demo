import {MongoClient} from 'mongodb'

// /api/new-meetup
// POST /api/new-meetup
export async function handler(req,res){
    if (req.method == 'POST'){
        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://Sandipan_Borthakur:Jonakinagar%40123@cluster0.nfgzj.mongodb.net/meetups?retryWrites=true&w=majority');
        const db = client.db();

        const meetupsCollection = db.collection('meetups');
        
        const result = await meetupsCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({message:'Meetup inserted!'});
    }
}

export default handler;