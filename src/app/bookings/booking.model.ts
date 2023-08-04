export class Booking {
  constructor(
    public id: string,
    public placeId: string,
    public userId: String,
    public placeTitle: String,
    public guestNumber: number
  ){}
}
