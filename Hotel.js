class Hotel {
    constructor(numOfRoom = 3){
        this.rooms = []
        for(let i=0 ; i< numOfRoom; i++){
            var room = {
                roomID: i,
                available: true
            }
            this.rooms.push(room)
        }
    }

    reservation(roomId){
        const room = this.rooms.find((room) => room.roomID === roomId)
        if (room) {
          if (room.available) {
            room.available = false
            return room
          } else {
            return "invalid"
          }
        } else {
          return -1 
        }
    }

    cancleReservation(roomId){
        const room = this.rooms.find((room) => room.roomID === roomId)
        if (room) {
          if (!(room.available)) {
            room.available = true
            return room
          } else {
            return "invalid"
          }
        } else {
          return -1 
        }
    }

    getRoomAvailable(){
        this.availablerooms = []
        for (let i = 0; i < this.rooms.length; i++) {
            if(this.rooms[i].available === true)
            this.availablerooms.push(this.rooms[i])
        }
        console.log(this.availablerooms)
    }
}

const hotel = new Hotel(3)
console.log(hotel)
console.log(hotel.reservation(0))
console.log(hotel.reservation(1))
console.log(hotel.reservation(2))
console.log(hotel.cancleReservation(0))
console.log(hotel.cancleReservation(1))
console.log(hotel.cancleReservation(2))
hotel.getRoomAvailable()