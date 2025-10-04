from fastapi import APIRouter

router = APIRouter()

SAMPLE_PROVIDERS = [
    {"id": 1, "name": "Aisha Okoro", "subjects": ["Math", "Physics"], "rating": 4.8, "hourly_rate": 12},
    {"id": 2, "name": "John Doe", "subjects": ["Python", "Web Dev"], "rating": 4.6, "hourly_rate": 18},
]

@router.get("/")
def list_providers(q: str = None):
    if q:
        q_lower = q.lower()
        return [p for p in SAMPLE_PROVIDERS if q_lower in p["name"].lower() or any(q_lower in s.lower() for s in p["subjects"])]
    return SAMPLE_PROVIDERS

@router.get("/{provider_id}")
def get_provider(provider_id: int):
    for p in SAMPLE_PROVIDERS:
        if p["id"] == provider_id:
            return p
    return {"error": "not found"}
