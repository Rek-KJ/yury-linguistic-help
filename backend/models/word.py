from sqlalchemy import Column, Table
from sqlalchemy.sql.sqltypes import Date, Integer, String

from config.db import engine, meta

words = Table(
    "words",
    meta,
    Column("id", Integer, primary_key=True),
    Column("text", String(255)),
    Column("atergo_id", Integer),
    Column("afronte_id", Integer),
    Column("context", String(4096)),
    Column("source", String(4096)),
    Column("date", Date),
)

meta.create_all(engine)
