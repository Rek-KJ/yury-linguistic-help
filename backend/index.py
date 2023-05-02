from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes.word import word_api

app = FastAPI()
app.include_router(word_api)

app.add_middleware(
    CORSMiddleware,
    allow_origins="http://localhost:3000",  # ['*']
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(word_api)
