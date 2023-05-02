from sqlalchemy import URL, MetaData, create_engine

url_object = URL.create(
    "mysql+pymysql",
    username="root",
    password="password",
    host="localhost",
    port=3306,
    database="words",
)
engine = create_engine(url_object)
# engine = create_engine("mysql+pymysql://root:password@localhost:3306/words")
meta = MetaData()
conn = engine.connect()
