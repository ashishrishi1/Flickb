from fastapi import FastAPI, APIRouter, HTTPException, Depends, status
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone
from passlib.context import CryptContext

# 1. SETUP
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

app = FastAPI()
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# 2. DATABASE CONNECTION
mongo_url = os.environ.get('MONGO_URL')
db_name = os.environ.get('DB_NAME', 'flickb')
client = AsyncIOMotorClient(mongo_url)
db = client[db_name]

# 3. MODELS (The structure for Ads and Users)
class UserRegister(BaseModel):
    email: EmailStr
    password: str
    username: str

class AdCreate(BaseModel):
    title: str
    description: str
    price: float
    category: str
    image_url: Optional[str] = "https://via.placeholder.com/300"

# 4. ROUTES
api_router = APIRouter(prefix="/api")

@api_router.get("/")
async def root():
    return {"status": "Flickb API is running"}

# REGISTER A USER
@api_router.post("/register")
async def register(user: UserRegister):
    hashed_password = pwd_context.hash(user.password)
    user_dict = {
        "id": str(uuid.uuid4()),
        "email": user.email,
        "username": user.username,
        "password": hashed_password
    }
    await db.users.insert_one(user_dict)
    return {"message": "User created successfully"}

# POST AN AD (OLX Feature)
@api_router.post("/ads")
async def post_ad(ad: AdCreate):
    ad_dict = ad.model_dump()
    ad_dict["id"] = str(uuid.uuid4())
    ad_dict["created_at"] = datetime.now(timezone.utc).isoformat()
    await db.ads.insert_one(ad_dict)
    return {"message": "Ad posted!", "id": ad_dict["id"]}

# GET ALL ADS
@api_router.get("/ads")
async def get_ads():
    ads = await db.ads.find({}, {"_id": 0}).to_list(100)
    return ads

app.include_router(api_router)

# 5. SECURITY (CORS)
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"], # Allows your frontend to talk to this backend
    allow_methods=["*"],
    allow_headers=["*"],
)
