import { ROOMS } from '@/application/features/calculator/constants/data'

export function checkRooms(rooms: string[]) {
   const wrongRooms: string[] = []
   const availableRooms = ROOMS.map((room) => room.name)
   rooms.forEach((room) => {
      if (!availableRooms.includes(room)) {
         wrongRooms.push(room)
      }
   })
   if (wrongRooms.length > 0) {
      let errorMsg = `Rooms: `
      wrongRooms.forEach((wrongRoom) => (errorMsg += `${wrongRoom}, `))
      errorMsg += `are invalid.`
      return { success: false, error: errorMsg }
   }
   return { success: true, error: null }
}
