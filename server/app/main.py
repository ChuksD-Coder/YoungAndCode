from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers import providers, bookings, ai

app = FastAPI(title="YoungAndCode API - Dev")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(providers.router, prefix="/api/providers", tags=["providers"])
app.include_router(bookings.router, prefix="/api/bookings", tags=["bookings"])
app.include_router(ai.router, prefix="/api/ai", tags=["ai"])


@app.get("/")
def read_root():
    return {"message": "Hello from YoungAndCode backend!"}


@app.get("/health")
def health():
    return {"status": "ok"}



