from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

class RecRequest(BaseModel):
    subject: str
    age: int
    timezone: str = "UTC"

@router.post("/recommendations")
def recommendations(req: RecRequest):
    subject = req.subject.lower()
    if "python" in subject or "web" in subject:
        suggested = [{"id":2, "name":"John Doe", "reason":"Good at coding & project work"}]
    else:
        suggested = [{"id":1, "name":"Aisha Okoro", "reason":"Experienced in academics"}]
    return {"recommendations": suggested}

class SummaryRequest(BaseModel):
    notes: str

@router.post("/lesson-summary")
def lesson_summary(req: SummaryRequest):
    notes = req.notes
    return {"summary": f"Short summary: {notes[:120]}..."}
