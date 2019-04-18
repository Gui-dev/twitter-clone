import Tweet from './../models/Tweet'

class TweetController {

  async index( req, res ) {

    try {
      const tweets = await Tweet.find( {} ).sort( '-createdAt' )
      return res.json( tweets )
    } catch (error) {
      console.log( error )
    }
  }

  async store( req, res ) {

    try {
      const tweet = await Tweet.create( req.body )

      req.io.emit( 'tweet', tweet )

      return res.status( 200 ).json( tweet )
    } catch ( error ) {
      console.log( error )
      return res.status( 500 ).json( { erros: [ "Erro ao um tweeter" ] } )
    }
  }

}

export default new TweetController()