import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Use a service account.
cred = credentials.Certificate('./shop287-d976d-firebase-adminsdk-qannj-d6f871f805.json')

app = firebase_admin.initialize_app(cred)

db = firestore.client()
# l = [
#     {
#       "id": 1,
#       "name": "Nike Shoes",
#       "price": 200,
#       "imageSrc": "https://media.discordapp.net/attachments/1065299755275661315/1083303582427779162/Aviral_aesthetic_nike_shoes_tilted_at_a_45_degree_angle_eye_ple_8e64278d-886c-43be-9ece-1d98afdc040f.png?width=488&height=488",
#       "imageAlt": "Product 1 image",
#       "productDescription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore architecto voluptate deleniti repellendus tempora, magni temporibus, asperiores quos alias nostrum adipisci suscipit, similique veritatis voluptatum nesciunt fuga voluptatibus! Error, consequatur."
#     },
#     {
#       "id": 2,
#       "name": "Addidas Shoes",
#       "price": 170,
#       "imageSrc": "https://media.discordapp.net/attachments/1065299755275661315/1083303959025942588/Aviral_aesthetic_nike_shoes_tilted_at_a_45_degree_angle_eye_ple_c5540ce2-ca36-41a0-919f-fd471faacad9.png?width=488&height=488",
#       "imageAlt": "Product 2 image",
#       "productDescription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore architecto voluptate deleniti repellendus tempora, magni temporibus, asperiores quos alias nostrum adipisci suscipit, similique veritatis voluptatum nesciunt fuga voluptatibus! Error, consequatur."
#     },
#     {
#       "id": 3,
#       "name": "Kindle",
#       "price": 100,
#       "imageSrc": "https://img.freepik.com/free-photo/person-reading-online-magazine-using-digital-device_52683-107496.jpg?w=1380&t=st=1678369592~exp=1678370192~hmac=dcfdd67eb8fce3cd892436da5b724106d4a396a1cb7d3c835d68599728cefb25",
#       "imageAlt": "Product 4 image",
#       "productDescription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore architecto voluptate deleniti repellendus tempora, magni temporibus, asperiores quos alias nostrum adipisci suscipit, similique veritatis voluptatum nesciunt fuga voluptatibus! Error, consequatur."
#     },
#     {
#       "id": 4,
#       "name": "Bose Headphones",
#       "price": 300,
#       "imageSrc": "https://img.freepik.com/free-photo/black-headphones-digital-device_53876-96805.jpg?w=826&t=st=1678369534~exp=1678370134~hmac=4b97c0f22d6f93651bd95811eb1be8b7ac9dccdc980e33e699f17f997fa45119",
#       "imageAlt": "Product 3 image",
#       "productDescription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore architecto voluptate deleniti repellendus tempora, magni temporibus, asperiores quos alias nostrum adipisci suscipit, similique veritatis voluptatum nesciunt fuga voluptatibus! Error, consequatur."
#     }
#   ]

l = [
    {
      "name": "Vintage Camera",
      "price": 400,
      "imageSrc": "https://images.pexels.com/photos/1203803/pexels-photo-1203803.jpeg",
      "imageAlt": "Product 5 image",
      "productDescription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore architecto voluptate deleniti repellendus tempora, magni temporibus, asperiores quos alias nostrum adipisci suscipit, similique veritatis voluptatum nesciunt fuga voluptatibus! Error, consequatur."
      }
    ]

# Add a new doc in collection 'cities' with ID 'LA'
for data in l:
  db.collection("products").add(data)

print("[+] Data Appended")