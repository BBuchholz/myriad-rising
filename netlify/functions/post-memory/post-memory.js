const faunadb = require('faunadb');

const faunaClient = new faunadb.Client({ secret: process.env.FAUNADB_SERVER_SECRET });

const q = faunadb.query;

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST'){
    return { statusCode: 500, body: 'POST ONLY!' }
  }

  try{

    const memory = { 
      data: JSON.parse(event.body) 
    };

    if(memory.data.text.trim() === ''){
      
      throw 'entry is empty!';
    }

    const req = await faunaClient.query(q.Create(q.Ref("classes/memories"), memory));
    console.log(req);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Successfully added memory!'})
    }

  } catch (err) {

    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    }

  }

}