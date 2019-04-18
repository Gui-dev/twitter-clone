import Tweet from './../models/Tweet'

class LikeController {

  async store( req, res ) {

    try {
      const { id } = req.params
      const tweet = await Tweet.findById( id )
      tweet.set( { likes: tweet.likes + 1 } )
      await tweet.save()

      req.io.emit( 'like', tweet )

      return res.status( 200 ).json( tweet )
    } catch (error) {
      console.log( error )
      return res.status( 500 ).json( { erros: [ "Erro ao da like" ] } )
    }
  }

}

export default new LikeController()