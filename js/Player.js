class Player{
    constructor(){
        this.index=null
        this.distance=0
        this.name=null
    }
    getCount(){
        var playerCountRef  = database.ref('gameCount');
        playerCountRef.on("value",function(data){
           playerCount = data.val();
        })
       
      }
      updateCount(count){
        database.ref('/').update({
          playerCount: count
        });
      }
    
}
