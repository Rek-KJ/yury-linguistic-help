from fastapi import APIRouter  # , Response

from config.db import conn
from models.word import words
from schemas.word import Word

# from datetime import datetime

word_api = APIRouter()


@word_api.get("/")
def fetch_words():
    result_rows = conn.execute(words.select()).fetchall()
    return [row._mapping for row in result_rows]


@word_api.post("/")
def post_words(word: Word):
    # Todo fetch words, order them and find atergo / afronte id
    # Not sure if this is not faster with linked list!
    # (link to word before, and word after).
    # New word just modifies two links,
    # but getting 10 words is 10 queries...
    return conn.execute(
        words.insert().values(
            text=word.text,
            atergo_id=word.atergo_id,
            afronte_id=word.afronte_id,
            context=word.context,
            source=word.source,
            date=word.date,
        )
    )


@word_api.put("/{id}")
def put_words(id: int, word: Word):
    # Todo fetch words, order them and find atergo / afronte id
    return conn.execute(
        words.update()
        .values(
            text=word.text,
            atergo_id=word.atergo_id,
            afronte_id=word.afronte_id,
            context=word.context,
            source=word.source,
            date=word.date,
        )
        .where(words.c.id == id)
    )


@word_api.delete("/{id}")
def delete_words(id: int):
    return conn.execute(words.delete().where(words.c.id == id))
