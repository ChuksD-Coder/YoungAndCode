from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

class BookingCreate(BaseModel):
    provider_id: int
    client_name: str
    start: str
    end: str
    price: float

BOOKINGS = []

@router.post("/")
def create_booking(payload: BookingCreate):
    booking = payload.dict()
    booking["id"] = len(BOOKINGS) + 1
    booking["status"] = "confirmed"
    BOOKINGS.append(booking)
    return booking

@router.get("/")
def list_bookings():
    return BOOKINGS
