"""
FastAPI Backend for Copilot Playground

A simple FastAPI application to demonstrate Python backend capabilities
with GitHub Copilot.
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import health, api

app = FastAPI(
    title="Copilot Playground Python Backend",
    description="A demo FastAPI backend for testing GitHub Copilot capabilities",
    version="1.0.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify actual origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(health.router, prefix="/health", tags=["health"])
app.include_router(api.router, prefix="/api", tags=["api"])

@app.get("/")
async def root():
    """Root endpoint"""
    return {
        "message": "Welcome to Copilot Playground Python Backend",
        "docs": "/docs",
        "redoc": "/redoc"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)