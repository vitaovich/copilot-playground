"""
API endpoints for demonstration
"""

from fastapi import APIRouter
from pydantic import BaseModel
from typing import List

router = APIRouter()

class Message(BaseModel):
    text: str
    author: str = "anonymous"

class MessageResponse(BaseModel):
    id: int
    text: str
    author: str
    created_at: str

# In-memory storage for demo purposes
messages: List[MessageResponse] = []
message_counter = 0

@router.get("/messages", response_model=List[MessageResponse])
async def get_messages():
    """Get all messages"""
    return messages

@router.post("/messages", response_model=MessageResponse)
async def create_message(message: Message):
    """Create a new message"""
    global message_counter
    message_counter += 1
    
    from datetime import datetime
    new_message = MessageResponse(
        id=message_counter,
        text=message.text,
        author=message.author,
        created_at=datetime.utcnow().isoformat()
    )
    
    messages.append(new_message)
    return new_message

@router.get("/copilot-info")
async def copilot_info():
    """Information about GitHub Copilot capabilities"""
    return {
        "message": "This backend was scaffolded with GitHub Copilot assistance!",
        "features": [
            "Code completion and suggestions",
            "Documentation generation", 
            "Test writing assistance",
            "Refactoring help",
            "Bug fixing suggestions"
        ],
        "languages_supported": [
            "Python", "JavaScript", "TypeScript", "Java", "C#", "Go", "Rust", "and many more!"
        ]
    }