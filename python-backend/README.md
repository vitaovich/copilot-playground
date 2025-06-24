# Python Backend - Copilot Playground

A FastAPI-based Python backend demonstrating GitHub Copilot capabilities for backend development.

## Overview

This backend provides a simple REST API built with FastAPI, showcasing how GitHub Copilot can assist with:
- Project scaffolding and structure
- API endpoint creation
- Documentation generation
- Code completion and suggestions

## Features

- 🚀 **FastAPI** - Modern, fast web framework for building APIs
- 📚 **Auto-generated Documentation** - Interactive API docs at `/docs`
- 🔄 **CORS Support** - Ready for frontend integration
- 💾 **In-memory Storage** - Simple message storage for demonstration
- 🏥 **Health Checks** - Health and readiness endpoints

## Quick Start

### Prerequisites

- Python 3.8 or higher
- pip (Python package installer)

### Installation

1. **Navigate to the python-backend directory:**
   ```bash
   cd python-backend
   ```

2. **Create a virtual environment (recommended):**
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

### Running the Application

1. **Start the development server:**
   ```bash
   python main.py
   ```
   
   Or use uvicorn directly:
   ```bash
   uvicorn main:app --reload --host 0.0.0.0 --port 8000
   ```

2. **Access the application:**
   - **API Base URL:** http://localhost:8000
   - **Interactive Docs:** http://localhost:8000/docs
   - **ReDoc Documentation:** http://localhost:8000/redoc

## API Endpoints

### Health Checks
- `GET /health/` - Basic health check
- `GET /health/ready` - Readiness check

### Messages API
- `GET /api/messages` - Get all messages
- `POST /api/messages` - Create a new message

### Copilot Demo
- `GET /api/copilot-info` - Information about GitHub Copilot capabilities

## Project Structure

```
python-backend/
├── main.py              # Application entry point
├── requirements.txt     # Python dependencies
├── README.md           # This file
├── .gitignore          # Git ignore patterns
└── app/                # Application package
    ├── __init__.py
    └── routes/         # API routes
        ├── __init__.py
        ├── health.py   # Health check endpoints
        └── api.py      # Main API endpoints
```

## Development with GitHub Copilot

This project demonstrates various ways GitHub Copilot can assist with Python backend development:

1. **Code Generation** - Copilot helped generate the FastAPI application structure
2. **Endpoint Creation** - AI-assisted API endpoint development
3. **Documentation** - Auto-generated docstrings and comments
4. **Error Handling** - Suggestions for proper error handling patterns
5. **Testing** - Assistance with test case generation

## Next Steps

- Add database integration (PostgreSQL, MongoDB, etc.)
- Implement authentication and authorization
- Add comprehensive testing suite
- Set up CI/CD pipeline
- Add logging and monitoring
- Implement API rate limiting

## Contributing

This is part of the Copilot Playground project. Feel free to experiment and extend the functionality to test GitHub Copilot's capabilities!

## Related Projects

- [Next.js Frontend](../nextjs/) - The frontend companion to this backend