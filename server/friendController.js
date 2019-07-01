const friends = [
    {
        id:0,
        name:'Guy Fieri',
        image:'https://assets3.thrillist.com/v1/image/2670144/size/tmg-gift_guide_default.jpg'
    },
    {
        id:1,
        name:'Shrek',
        image:'https://i.kinja-img.com/gawker-media/image/upload/s--UisO0ff0--/c_scale,f_auto,fl_progressive,q_80,w_800/txthbfekk2a1garzhu0j.jpg'
    }
]

let new_id = 3;

module.exports = {
    getFriends:(req,res,next) =>{
        console.log("Get friends hit!")
        res.status(200).send(friends)
    },
    postFriend:(req,res,next) =>{
        const { name, image } = req.body
        friends.push({
            id:new_id,
            name,
            image
        })
        new_id += 1;
        res.status(200).send(friends)
    },
    deleteFriend:(req,res,next) =>{
        const {id} = req.params
        let indexToDelete = friends.findIndex(friend => +friend.id == +id)
        console.log(indexToDelete)
        friends.splice(indexToDelete,1)
        res.status(200).send(friends)
    }
}
