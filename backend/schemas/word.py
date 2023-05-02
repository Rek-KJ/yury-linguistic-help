from datetime import date

from pydantic import BaseModel


class Word(BaseModel):
    text: str
    atergo_id: int
    afronte_id: int
    context: str
    source: str
    date: date
