from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
with open("./Data/Posts.json", "r", encoding="utf-8") as f:
    data = json.load(f)

@app.get("/posts")
async def get_posts():
    return {"posts": data["posts"]}


@app.get("/post/{postId}")
async def getPost(postId:str):
    for post in data['posts']:
        if str(post["id"])==postId:
            return post
    return {"error":"Post topilmadi."}